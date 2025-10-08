class CreateNewFile_StepOne {
  getInputByLabel(labelPattern) {
    return cy.contains('label', labelPattern, { timeout: 15000 })
      .then(($label) => {
        const inputId = $label.attr('for');
        expect(inputId, `label matching ${labelPattern} should reference an input`).to.be.a('string').and.not.be.empty;
        const escapedId = Cypress.$.escapeSelector(inputId);
        return cy.get(`#${escapedId}`, { timeout: 15000 }).should('be.visible');
      });
  }

  // Elements
  get layername() {
    return this.getInputByLabel(/Layer Name|اسم الطبقة/i);
  }

  get layerdescription() {
    return this.getInputByLabel(/(Layer\s*)?Description|وصف الطبقة/i);
  }

  get layercolor() {
    return cy.get('[data-testid="geocore-ColorPickerWidget-input"]', { timeout: 15000 })
      .should('be.visible');
  }

  get uploadfilepart() {
    return cy
      .get('[data-testid="geocore-FileUploadWidget-div"]', { timeout: 15000 })
      .should('be.visible');
  }

  get errormsgoffilerequired() {
    return cy.get('[data-testid="geocore-button-Comp"]', { timeout: 15000 }).should('be.visible');
  }

  get uploadedfilename() {
    return cy.get('[data-testid="geocore-FileUploadWidget-span"]');
  }

  get nexttostep2btn() {
    return cy.get('[data-testid="geocore-button-Comp"]', { timeout: 30000 }).should('be.visible');
  }

  get runningWorkspacePopup() {
    return cy.get('[data-testid="geocore-IncompleteWorkspaceDialog-h3"]');
  }

  get YesOptionOfthePopup() {
    return cy.get('.text-primary-foreground');
  }

  get NoOptionOfthePopup() {
    return cy.get('.pt-0 > .border');
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
    return this.uploadedfilename.should('contain', expectedName);
  }

  errormsg() {
    this.errormsgoffilerequired.should('not.exist');
  }

  GoNext() {
    this.nexttostep2btn.click();
  }

  handlePopupIfExistsAndChoose() {
    const popupSelector = '[data-testid="geocore-IncompleteWorkspaceDialog-h3"]';
    const noButtonSelector = '.pt-0 > .border';

    cy.get('body').then(($body) => {
      const popup = $body.find(popupSelector).filter(':visible');
      if (!popup.length) {
        cy.log('No incomplete workspace popup detected');
        return;
      }

      cy.wrap(popup).should('be.visible');

      cy.get(noButtonSelector, { timeout: 2000 })
        .filter(':visible')
        .first()
        .should('be.visible')
        .click({ force: true })
        .then(() => {
          cy.get(popupSelector).should('not.exist');
          cy.log('Dismissed incomplete workspace popup by selecting No');
        });
    });
  }
  

}

export default CreateNewFile_StepOne;
