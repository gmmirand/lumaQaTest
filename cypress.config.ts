// cypress.config.ts
import { defineConfig } from 'cypress';
import fs from 'fs';
import path from 'path';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import webpack from '@cypress/webpack-preprocessor';

export default defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on('task', {
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

      on('file:preprocessor', webpack({
        webpackOptions: {
          resolve: { extensions: ['.ts', '.js', '.feature'] },
          module: {
            rules: [
              {
                test: /\.ts$/,
                exclude: [/node_modules/],
                use: [{ loader: 'ts-loader', options: { transpileOnly: true } }]
              },
              {
                test: /\.feature$/,
                use: [
                  {
                    loader: '@badeball/cypress-cucumber-preprocessor/webpack',
                    options: config
                  }
                ]
              }
            ]
          }
        },
        watchOptions: { ignored: /node_modules/ }
      }));

      return config;
    },
    specPattern: 'cypress/e2e/features/**/*.feature',
    supportFile: 'cypress/support/e2e.ts',
    baseUrl: 'https://demoqa.com',
    downloadsFolder: 'cypress/downloads'
  },
  video: false
});
