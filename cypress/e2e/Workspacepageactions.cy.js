/// <reference types="cypress" />


import LoginPage from "../Pages/LoginPage"
import WorkSpacesPage from "../Pages/workspacespage"

describe('Workspacepageactions', () => {
    const loginpage = new LoginPage 
    const workspacespage = new WorkSpacesPage


 beforeEach (() => {
        //Login to the App 
        loginpage.load()
        loginpage.openLoginForm()
        loginpage.login("dev@gt.com.sa" , "q9qcvzssqr")
  
      });

    it('change Language', () => {
        workspacespage.ChangeLanguage()
        //workspacespage.ChangeLanguage()
    });


    it('Switch Organizations', () => {
        workspacespage.SwitchOrganizations()
    });
      
     


})                                                                                                                                                                                    