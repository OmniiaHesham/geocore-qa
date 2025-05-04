/// <reference types="cypress" />

import LoginPage from "../Pages/loginPage";
import WorkSpacesPage from "../Pages/workspacespage"

describe('Upload a data set', () => {
    beforeEach (() => {

        //Perform Login

        it('uploadfile', () => {
            const loginpage = new LoginPage 
            
            loginpage.load()
            loginpage.ClickOnLoginBtn()
            loginpage.login("dev@gt.com.sa" , "q9qcvzssqr")
      
          });


    })



    it('uploadfile', () => {
      const workspacespage = new WorkSpacesPage 
      
      workspacespage.SwitchOrganizations()
      workspacespage.ChangeLanguage()
      workspacespage.workspacessorting()
      workspacespage.SearchForaworkspace("")


    });

    
})