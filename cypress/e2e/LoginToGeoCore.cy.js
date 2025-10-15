/// <reference types="cypress" />
import { qase } from 'cypress-qase-reporter/mocha';





import LoginPage from "../support/pages/LoginPage"



  
  describe('Should Login to GEOCORE', () => {
    qase ([1],

    it('Visitgeocore', () => {
      const loginpage = new LoginPage 
      const username = Cypress.env('geocoreUsername');
      const password = Cypress.env('geocorePassword');

      if (!username || !password) {
        throw new Error('Missing GEOCORE credentials. Check environment variables.');
      }
      
      loginpage.load()
      loginpage.openLoginForm()
      loginpage.login(username, password)

    }));


})
