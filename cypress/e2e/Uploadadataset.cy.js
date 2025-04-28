/// <reference types="cypress" />


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
      const loginpage = new LoginPage 
      
      loginpage.load()
      loginpage.ClickOnLoginBtn()
      loginpage.login("dev@gt.com.sa" , "q9qcvzssqr")

    });

    
})