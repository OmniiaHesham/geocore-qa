class WorkSpacesPage {
  // Elements

  get languageChanger() {
    return cy.get('.space-x-4 > [data-testid="geocore-button-Comp"]');
  }

  get organizationSwitcher() {
    return cy.get('[data-testid="geocore-Header-DropdownMenuTrigger"]', { timeout: 15000 }).should('be.visible');
  }

  get organizationTrigger() {
    return cy.get('#radix-\\:r3\\: > [tabindex="0"]', { timeout: 15000 }).should('be.visible');
  }

  get organizationOptions() {
    return cy.get('.bg-gray-50 > .flex-col > .w-full, #radix-\\:r4\\: > .grid > :nth-child(2) > .flex-col > .w-full, #radix-\\:r4\\: > .grid > :nth-child(3) > .flex-col > .w-full');
  }

  get uploadFileButton() {
    return cy.contains(/رفع ملف|Upload File/i, { timeout: 15000 });
  }

  // Methods
  ClickOnUploadFile() {
    this.uploadFileButton.should('be.visible').then(($el) => {
      const clickable = $el.closest('button, [role="button"], a');
      if (clickable.length) {
        cy.wrap(clickable).click();
        return;
      }
      cy.wrap($el).click();
    });
  }

  ChangeLanguage() {
    this.languageChanger.click();
  }

  SwitchOrganizations() {
    this.organizationSwitcher.click();
    this.organizationTrigger.click();
    this.organizationOptions.each(($option) => {
      cy.wrap($option).click();
    });
  }
}

export default WorkSpacesPage;
