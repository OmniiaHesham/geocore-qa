class GeometryValidation_Step2 {

  // Elements
  get geometryTypeSelect() {
    return cy.get('.space-y-4 > .space-y-2 > [data-testid="geocore-select-element"]', { timeout: 15000 });
  }

  get longitudeSelect() {
    return cy.get(':nth-child(1) > [data-testid="geocore-select-element"]', { timeout: 15000 });
  }

  get latitudeSelect() {
    return cy.get('.grid > :nth-child(2) > [data-testid="geocore-select-element"]', { timeout: 15000 });
  }

  get nextButton() {
    return cy
      .contains('button[data-testid="geocore-button-Comp"]', 'التالي', { timeout: 30000 })
      .should('be.visible');
  }

  waitUntilEnabled(query) {
    return query.should(($el) => {
      const $node = Cypress.$($el).first();
      const native = $node.get(0);
      const disabledAttr = native ? native.disabled === true : false;
      const ariaDisabled = $node.attr('aria-disabled') === 'true';
      const hasPointerEventsNone = $node.hasClass('pointer-events-none');
      const hasOpacityDisabled = $node.hasClass('opacity-50');

      const isDisabled = disabledAttr || ariaDisabled || hasPointerEventsNone || hasOpacityDisabled;
      expect(isDisabled, 'element should be enabled').to.be.false;
    });
  }

  // Methods
  AssertDefaultGeometryType(expectedType = 'نقطة') {
    this.geometryTypeSelect.should('contain.text', expectedType);
  }

  selectDropdownOption(selectQueryFn, optionText) {
    const normalizedTarget = optionText.trim().toLowerCase();

    selectQueryFn().click({ force: true });

    const optionSelectors = [
      '[data-testid="geocore-select-item"]',
      '[data-radix-collection-item]',
      '[role="option"]',
      '[data-value]',
    ];

    const combinedSelector = optionSelectors.join(', ');

    cy.get(combinedSelector, { timeout: 10000 })
      .filter(':visible')
      .then(($options) => {
        if (!$options.length) {
          throw new Error('No options rendered for dropdown');
        }

        const exactMatch = $options.filter((_, el) => Cypress.$(el).text().trim().toLowerCase() === normalizedTarget);
        const partialMatch = exactMatch.length
          ? exactMatch
          : $options.filter((_, el) => Cypress.$(el).text().trim().toLowerCase().includes(normalizedTarget));

        if (!partialMatch.length) {
          throw new Error(`Option "${optionText}" not found in dropdown`);
        }

        cy.wrap(partialMatch.first()).scrollIntoView().click({ force: true });
      });

    return selectQueryFn().should(($el) => {
      const displayed = Cypress.$($el).text().trim().toLowerCase();
      expect(displayed, `Selected option should include "${optionText}"`).to.include(normalizedTarget);
    });
  }

  selectCoordinateFields({ longitude = 'long', latitude = 'lat' } = {}) {
    return this.selectDropdownOption(() => this.longitudeSelect, longitude).then(() =>
      this.selectDropdownOption(() => this.latitudeSelect, latitude),
    );
  }

  GoNext() {
    this.waitUntilEnabled(this.nextButton).click();
  }
}

export default GeometryValidation_Step2;
