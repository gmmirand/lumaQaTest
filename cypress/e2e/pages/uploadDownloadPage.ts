export class UploadDownloadPage {
  downloadButton = '#downloadButton';
  uploadInput = '#uploadFile';
  uploadedFileName = '#uploadedFilePath';

  clickDownload() {
    cy.get(this.downloadButton).click();
  }

  uploadFile(fileName: string) {
    cy.get(this.uploadInput).attachFile(fileName);
  }

  assertUploadedFile(fileName: string) {
    cy.get(this.uploadedFileName).should('contain.text', fileName);
  }
}
