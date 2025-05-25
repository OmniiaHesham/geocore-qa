class CreateNewFile_StepOne {

  // Elements
  get layername() {
    return cy.get(':nth-child(1) > [data-testid="geocore-input-input"]');
  }

  get layerdescription() {
    return cy.get(':nth-child(2) > [data-testid="geocore-input-input"]');
  }

  get layercolor() {
    return cy.get('#root_layerColor');
  }

  get uploadfilepart() {
    return cy.get('[data-testid="geocore-FileUploadWidget-label"] > [data-testid="geocore-FileUploadWidget-div"]');
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
    this.layername.type(name);
    this.layerdescription.type(description);
    this.layercolor.click();
  }

  get uploadInput() {
    return cy.get('input[type="file"]');
  }

  uploadFile(filename) {
    this.uploadInput.attachFile(filename, { force: true });
  }

  uploadedfilenamemethod(filename) {
    this.uploadedfilename.should('contain', filename);
  }

  errormsg() {
    this.errormsgoffilerequired.should('not.exist');
  }

  GoNext() {
    this.nexttostep2btn.click();
  }

  handlePopupIfExistsAndChoose() {
    cy.get('[data-testid="geocore-IncompleteWorkspaceDialog-h3"]', { timeout: 5000 }).then(($popup) => {
      if ($popup.length > 0 && $popup.is(':visible')) {
        cy.get('.text-primary-foreground').first().click();
      } else {
        cy.log('No popup displayed');
      }
    });
  }
  

}

export default CreateNewFile_StepOne;
