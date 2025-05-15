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
    
    get uploadfilepart () {
    return cy.get('[data-testid="geocore-FileUploadWidget-label"] > [data-testid="geocore-FileUploadWidget-div"]')
    }

    get errormsgoffilerequired () {
    return cy.get('[data-testid="geocore-button-Comp"]', { timeout: 15000 }).should('be.visible')
    
    }

    get uploadedfilename () {
        return cy.get('[data-testid="geocore-FileUploadWidget-span"]')
    }
    
    get nexttostep2btn () { 
    return cy.get('[data-testid="geocore-button-Comp"]', { timeout: 30000 }).should('be.visible')
    }

    get popupText() {
        return cy.get('[data-testid="geocore-IncompleteWorkspaceDialog-h3"]') 
      }
//Metods

enterlayerinfo (name , description) {
this.layername.type(name)
this.layerdescription.type(description)
this.layercolor.click()
}

get uploadInput() {
    return cy.get('input[type="file"]'); // this is the real file input
  }
  
  uploadFile(filename) {
    this.uploadInput.attachFile(filename, { force: true });

  }

  uploadedfilenamemethod (filename) {
    this.uploadedfilename.should('contain', filename);

  }

  verifyPopupContains(message) {
    this.popupText.should('be.visible').and('contain', message);
  }


  errormsg() {
    this.errormsgoffilerequired.should('not.exist')
  }
  
GoNext () {
    this.nexttostep2btn.click()
}



}

export default CreateNewFile_StepOne ;