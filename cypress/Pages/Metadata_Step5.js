class Metadata_Step5 {

    // elements

    get titleInput () {
        return cy
            .get('input#basics_title[data-testid="geocore-input-input"]', { timeout: 30000 })
            .should('be.visible');
    }

    get nextButton () {
        return cy
            .contains('button[data-testid="geocore-button-Comp"]', 'التالي', { timeout: 30000 })
            .should('be.visible');
    }

    waitUntilEnabled (query) {
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

    // methods

    enterTitle (title) {
        this.titleInput.clear().type(title);
    }

    GoNext () {
        this
            .waitUntilEnabled(this.nextButton)
            .click();
    }
}

export default Metadata_Step5 ;
