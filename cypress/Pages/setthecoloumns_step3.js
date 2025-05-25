class SetTheColoumns_Step3 {

//elements

ChoosePoint () {
    return cy.get(':nth-child(1) > .space-y-4 > .bg-gray-50 > .space-x-3 > .w-5')

}

ChooseOther () {
    return cy.get(':nth-child(1) > .space-y-4 > .bg-\[\#F5F7F9\] > .space-x-3 > [data-testid="geocore-RadioWidget-div"]')
}

ChhoseOneColumn () {
    return cy.get(':nth-child(2) > .space-y-4 > .bg-\[\#F5F7F9\] > .flex-col')
}

ChooseTwoColumns () {
    return cy.get(':nth-child(2) > .space-y-4 > .bg-\[\#F5F7F9\] > .flex-col')
}

ChooseLangitude () {
    return cy.get(':nth-child(3) > [data-testid="geocore-select-element"]')
}

ChooseLatitude () {
    return cy.get(':nth-child(4) > [data-testid="geocore-select-element"]')
}















//Methods






















}