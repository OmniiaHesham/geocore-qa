/// <reference types="cypress" />


import LoginPage from "../Pages/loginPage"


  
  describe('Should Login to GEOCORE', () => {
    it('Visit', () => {
      const loginpage = new LoginPage 
      
      loginpage.load()
      loginpage.ClickOnLoginBtn()
      loginpage.login("dev@gt.com.sa" , "q9qcvzssqr")

    });


})