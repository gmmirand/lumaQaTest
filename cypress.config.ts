import { defineConfig } from 'cypress';
import fs from 'fs';
import path from 'path';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import webpack from '@cypress/webpack-preprocessor';

export default defineConfig({
  e2e: {

    defaultCommandTimeout: 15000, // tempo máximo de comandos como cy.get/cy.contains
    pageLoadTimeout: 180000,      // tempo máximo para cy.visit carregar a página
    requestTimeout: 15000,        // timeout para requisições XHR/fetch
    responseTimeout: 15000,       // timeout para respostas XHR/fetch

    async setupNodeEvents(on, config) {
      // Cucumber plugin
      await addCucumberPreprocessorPlugin(on, config);

      // Tasks personalizadas
      on('task', {
        copyFileToFixtures({ fileName }: { fileName: string }) {
          const downloadsPath = path.join(config.downloadsFolder, fileName);
          const fixturesPath = path.join(config.fixturesFolder || 'cypress/fixtures', fileName);

          if (!fs.existsSync(downloadsPath)) {
            throw new Error(`File not found in downloads: ${downloadsPath}`);
          }

          fs.copyFileSync(downloadsPath, fixturesPath);
          return true;
        },

        deleteFileIfExists({ fileName }: { fileName: string }) {
          const filePath = path.join(config.downloadsFolder, fileName);
          if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
            return true;
          }
          return false;
        },

        checkFileExists({ fileName }: { fileName: string }) {
          const filePath = path.join(config.downloadsFolder, fileName);
          return fs.existsSync(filePath);
        }
      });

      // Webpack preprocessor para TS e Cucumber
      on(
        'file:preprocessor',
        webpack({
          webpackOptions: {
            resolve: { extensions: ['.ts', '.js', '.feature'] },
            module: {
              rules: [
                {
                  test: /\.ts$/,
                  exclude: [/node_modules/],
                  use: [{ loader: 'ts-loader', options: { transpileOnly: true } }],
                },
                {
                  test: /\.feature$/,
                  use: [
                    {
                      loader: '@badeball/cypress-cucumber-preprocessor/webpack',
                      options: {
                        ...config,
                        stepDefinitions: [
                          'cypress/e2e/step_definitions/**/*.ts',
                          'cypress/api/stepDefinitions/**/*.ts',
                        ],
                      },
                    },
                  ],
                },
              ],
            },
          },
          watchOptions: { ignored: /node_modules/ },
        })
      );

      return config;
    },

    // Specs
    specPattern: [
      'cypress/e2e/features/**/*.feature',
      'cypress/api/features/**/*.feature',
    ],

    supportFile: 'cypress/support/e2e.ts',
    baseUrl: 'https://api.restful-api.dev',
    downloadsFolder: 'cypress/downloads',

    screenshotsFolder: 'cypress/screenshots',
    trashAssetsBeforeRuns: true,
  },

  video: false,
});
