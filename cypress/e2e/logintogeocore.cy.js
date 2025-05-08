/// <reference types="cypress" />


import LoginPage from "../Pages/LoginPage"


  
  describe('Should Login to GEOCORE', () => {
    it('Visitgeocore', () => {
      const loginpage = new LoginPage 
      
      loginpage.load()
      loginpage.openLoginForm()
      loginpage.login("dev@gt.com.sa" , "q9qcvzssqr")

    });


})