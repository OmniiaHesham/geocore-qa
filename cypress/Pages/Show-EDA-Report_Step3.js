class ShowEDAReport_Step3 {

    // elements

    get fullScreenButton () {
        return cy
            .contains('button[data-testid="geocore-button-Comp"]', 'وضع ملء الشاشة', { timeout: 30000 })
            .should('be.visible');
    }

    get nextButton () {
        return cy
            .contains('button[data-testid="geocore-button-Comp"]', 'التالي', { timeout: 30000 })
            .should('be.visible');
    }

    get sweetvizToggle () {
        return cy
            .contains('button', 'Sweetviz Report', { timeout: 30000 })
            .should('be.visible');
    }

    waitUntilEnabled (button) {
        return button.should(($btn) => {
            const $el = Cypress.$($btn).first();
            const native = $el.get(0);
            const hasDisabledAttr = native ? native.disabled === true : false;
            const ariaDisabled = $el.attr('aria-disabled') === 'true';
            const hasPointerEventsNone = $el.hasClass('pointer-events-none');
            const hasOpacityDisabled = $el.hasClass('opacity-50');

            const isDisabled = hasDisabledAttr || ariaDisabled || hasPointerEventsNone || hasOpacityDisabled;
            expect(isDisabled, 'button should be enabled').to.be.false;
        });
    }

    // methods

    ShowFullScreenOption () {
        this
            .waitUntilEnabled(this.fullScreenButton)
            .click();
    }

    ShowSweetvizReport () {
        this
            .waitUntilEnabled(this.sweetvizToggle)
            .click();
    }

    GoNext () {
        this.nextButton.click();
    }
}

export default ShowEDAReport_Step3 ;
