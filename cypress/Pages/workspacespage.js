class WorkSpacesPage {


    //Elements 

    get Uploadfilebtn() {
        return cy.contains(/رفع ملف|Upload File/i, { timeout: 15000 });
      }
      
    get DesignLayerfromScratch () { 
       return cy.get('.grid-cols-2 > :nth-child(2)')

    }

    get OrganizationSelectortab () {
        return cy.get('#radix-\:r2\:')

    }

    get SearchboxForWorkspaces () { 
        return cy.get('.sm\:flex-row > .relative > .flex')

    }

    get organizationswitcher () {
        return cy.get('[data-testid="geocore-Header-DropdownMenuTrigger"]',{ timeout: 15000 }).should('be.visible')

    }

    get OrganizationTriger () {
        return cy.get('#radix-\:r3\: > [tabindex="0"]' , { timeout: 15000 }).should('be.visible')
    }

    get ACMEOrganization () {
        return cy.get('.bg-gray-50 > .flex-col > .w-full')
    }

    get GeotechOrganization () {
        return cy.get('#radix-\:r4\: > .grid > :nth-child(2) > .flex-col > .w-full')
    }

    get AaenOrganization () {
        return cy.get('#radix-\:r4\: > .grid > :nth-child(3) > .flex-col > .w-full')
    }

    get OrganizationSettingstab () {
        return cy.get('#radix-\:r3\: > [tabindex="0"]')
    }

    get Datesorting () {
        return cy.get('.w-\[8\.5rem\] > .h-10')
    }

    get lastviewoption () {
        return cy.get('#radix-\:rdo\:')
    }

    get Creatingdateoption () {
        return cy.get('#radix-\:ran\:')
    }

    get Listviewbtn () {
        return cy.get('#radix-\:r2k\:-trigger-list')
    }

    get gridviewbtn () {
        return cy.get('#radix-\:r2k\:-trigger-grid')
    }

    get languagechanger () {
        return cy.get('.space-x-4 > [data-testid="geocore-button-Comp"]')
    }

    //Methods
    ClickOnUploadFile () {
        this.Uploadfilebtn.should('be.visible').then(($el) => {
            const clickable = $el.closest('button, [role="button"], a');
            if (clickable.length) {
                cy.wrap(clickable).click();
                return;
            }
            cy.wrap($el).click();
        });
    }

    ChangeLanguage () {
        this.languagechanger.click()
    }

    SwitchOrganizations () {
        this.organizationswitcher.click()
        this.OrganizationTriger.click()
        this.AaenOrganization.click()
        this.GeotechOrganization.click ()
        this.ACMEOrganization.click()

    }

    SearchForaworkspace () {
        this.SearchForaworkspace.type("workspacename")
    }

    workspacessorting () {
        this.lastviewoption.click()
        this.Creatingdateoption.click()
    }
    


}

export default WorkSpacesPage
