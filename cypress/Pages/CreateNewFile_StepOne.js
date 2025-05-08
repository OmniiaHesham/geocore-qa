class CreateNewFile_StepOne {

    //elements



get layername () {
    return cy.get(':nth-child(1) > [data-testid="geocore-input-input"]')
    }
    
    get layerdescription () {
    return cy.get(':nth-child(2) > [data-testid="geocore-input-input"]')
    }
    
    get layercolor () {
    return cy.get('#root_layerColor') 
    }
    
    get uploadfilebtn () {
    return cy.get('[data-testid="geocore-FileUploadWidget-label"] > [data-testid="geocore-FileUploadWidget-div"]')
    }
    
    get nextbtn () { 
    return cy.get('[data-testid="geocore-button-Comp"]')
    }
//Metods
enterlayerinfo (name , description) {
this.layername.type(name)
this.layerdescription.type(description)
this.layercolor.click()

}
}

export default CreateNewFile_StepOne ;