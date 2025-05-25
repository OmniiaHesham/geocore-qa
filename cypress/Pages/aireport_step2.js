class AiReport_Step2 {

    //elements

    get Ydatareport () {

    return cy.get('.hover\:bg-primary\/90')
    }

    get sweetvizreport () {
        return cy.get(':nth-child(2) > [data-testid="geocore-AIReportStep-div"] > .bg-gray-200')
    }

    get showfullscreen () {
        return cy.get('.justify-between > .flex > :nth-child(1)')
    }

    get downloadfile () {
        return cy.get('.justify-between > .flex > :nth-child(2)')
    }

    get nexttostep3 () {
        return cy.get('.gap-4 > .bg-\[\#5E58EE\]')
    }
    







    //methods

    ShowFullScreenOption () {
        this.showfullscreen.click()
    }

}

export default AiReport_Step2 ;
