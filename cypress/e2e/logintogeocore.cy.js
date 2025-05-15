/// <reference types="cypress" />
import { qase } from 'cypress-qase-reporter/mocha';





import LoginPage from "../Pages/LoginPage"



  
  describe('Should Login to GEOCORE', () => {
    qase ([1],

    it('Visitgeocore', () => {
      const loginpage = new LoginPage 
      
      loginpage.load()
      loginpage.openLoginForm()
      loginpage.login("dev@gt.com.sa" , "q9qcvzssqr")

    }));


})