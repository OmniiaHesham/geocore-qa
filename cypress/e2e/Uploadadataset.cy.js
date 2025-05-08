/// <reference types="cypress" />

import LoginPage from "../Pages/LoginPage";
import WorkSpacesPage from "../Pages/workspacespage";
import CreateNewFile_StepOne from "../Pages/CreateNewFile_StepOne";

describe('GeoCore - Upload Dataset Flow', () => {
  const loginpage = new LoginPage 
  const workspacesPage = new WorkSpacesPage
  const createnewfile_stepone = new CreateNewFile_StepOne

  before (() => {
    // Visit the login page and perform login
    //Login to the App 
    loginpage.load()
    loginpage.openLoginForm()
    loginpage.login("dev@gt.com.sa" , "q9qcvzssqr")

    // Optional: add assertion to ensure login succeeded
    cy.url().should('include', '/dashboard'); 
  });

  it('should upload a dataset file successfully', () => {
    workspacesPage.ClickOnUploadFile();
    createnewfile_stepone.enterlayerinfo("Automated Layer" , "This is an automated description to test adding layer to Geocore")
    

    
  });
});
