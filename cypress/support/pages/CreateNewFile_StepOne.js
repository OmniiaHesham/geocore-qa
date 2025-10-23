class CreateNewFile_StepOne {
  // Elements
  get layername() {
    return cy.get('#layer-form_layerName');
  }

  get layerdescription() {
    return cy.get(':nth-child(2) > [data-testid="geocore-input-input"]');
  }

  get layercolor() {
    return cy.get('[data-testid="geocore-ColorPickerWidget-input"]');
  }

  get uploadedfilename() {
    return cy.get('[data-testid="geocore-FileUploadWidget-span"]');
  }

  get nexttostep2btn() {
    return cy.get('[data-testid="geocore-button-Comp"]', { timeout: 30000 }).should('be.visible');
  }

  // Methods
  enterlayerinfo(name, description) {
    this.layername.clear().type(name);
    this.layerdescription.clear().type(description);
    this.layercolor.click();
  }

  get uploadInput() {
    return cy
      .get('[data-testid="geocore-FileUploadWidget-div"]', { timeout: 15000 })
      .then(($div) => {
        const $closestWithInput = $div
          .closest('[data-testid="geocore-FileUploadWidget-label"], label, [data-testid="geocore-FileUploadWidget-root"]')
          .find('input[type="file"]');

        if ($closestWithInput.length) {
          return cy.wrap($closestWithInput);
        }

        const $parentInput = $div.parent().find('input[type="file"]');
        if ($parentInput.length) {
          return cy.wrap($parentInput);
        }

        return cy.get('input[type="file"]').first();
      });
  }

  uploadFile(fixturePath) {
    const sanitizedPath = fixturePath.replace(/^\/+/, '');
    const relativePath = sanitizedPath.startsWith('cypress/fixtures/')
      ? sanitizedPath.replace(/^cypress\/fixtures\//, '')
      : sanitizedPath;

    const absolutePath = `cypress/fixtures/${relativePath}`;
    const fileName = relativePath.split('/').pop();

    return this.uploadInput
      .selectFile(absolutePath, { force: true })
      .then(() => fileName);
  }

  uploadedfilenamemethod(filenameOrPath) {
    const expectedName = filenameOrPath.split('/').pop();
    this.uploadedfilename.should('contain', expectedName);
  }

  GoNext() {
    this.nexttostep2btn.click();
  }

  handlePopupIfExistsAndChoose() {
    cy.get('body').then(($body) => {
      const selector = '[data-testid="geocore-IncompleteWorkspaceDialog-h3"]';
      const $popup = $body.find(selector);

      if ($popup.length > 0) {
        cy.wrap($popup).should('be.visible');
        cy.get('.text-primary-foreground').first().click();
      } else {
        cy.log('No popup displayed');
      }
    });
  }
}

export default CreateNewFile_StepOne;
