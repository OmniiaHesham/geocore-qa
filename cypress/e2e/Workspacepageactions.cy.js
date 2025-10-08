/// <reference types="cypress" />


import LoginPage from "../support/pages/LoginPage"
import WorkSpacesPage from "../support/pages/workspacespage"

describe('Workspacepageactions', () => {
    const loginpage = new LoginPage 
    const workspacespage = new WorkSpacesPage
    const username = Cypress.env('geocoreUsername');
    const password = Cypress.env('geocorePassword');

    if (!username || !password) {
      throw new Error('Missing GEOCORE credentials. Check environment variables.');
    }


 beforeEach (() => {
        //Login to the App 
        loginpage.load()
        loginpage.openLoginForm()
        loginpage.login(username , password)
  
      });

    it('change Language', () => {
        workspacespage.ChangeLanguage()
        //workspacespage.ChangeLanguage()
    });


    it('Switch Organizations', () => {
        workspacespage.SwitchOrganizations()
    });
      
     


})                                                                                                                                                                                    
