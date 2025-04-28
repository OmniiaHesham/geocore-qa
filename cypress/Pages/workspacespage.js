class WorkSpacesPage {


    //Elements 

    get Uploadfilebtn () {
        return cy.get('.grid-cols-2 > :nth-child(1)')
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
        return cy.get('#radix-\:r3\: > [tabindex="0"]')

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
        return cy.get('.space-x-4 > .justify-center')
    }

    //Methods
    ClickOnUploadFile () {
        this.Uploadfilebtn.click()
    }

    ChangeLanguage () {
        this.languagechanger.click()
    }

    SwitchOrganizations () {
        this.AaenOrganization.click()
        this.GeotechOrganization.click ()
        this.ACMEOrganization.click()

    }

    SearchForaworkspace () {
        this.SearchForaworkspace.type(workspacename)
    }

    workspacessorting () {
        this.lastviewoption.click()
        this.Creatingdateoption.click()
    }
    


}


