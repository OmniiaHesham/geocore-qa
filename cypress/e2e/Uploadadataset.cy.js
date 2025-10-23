/// <reference types="cypress" />

import LoginPage from "../Pages/LoginPage";
import WorkSpacesPage from "../Pages/workspacespage";
import CreateNewFile_StepOne from "../Pages/CreateNewFile_StepOne";
import GeometryValidation_Step2 from "../Pages/Geometry-Validation_Step2";
import ShowEDAReport_Step3 from "../Pages/Show-EDA-Report_Step3";
import ViewSchema_Step4 from "../Pages/viewschema_step4";
import Metadata_Step5 from "../Pages/Metadata_Step5";

describe('GeoCore - Upload Dataset Flow', () => {
  const loginpage = new LoginPage 
  const workspacesPage = new WorkSpacesPage
  const createnewfile_stepone = new CreateNewFile_StepOne
  const geometryValidation_step2 = new GeometryValidation_Step2
  const showEDAReport_step3 = new ShowEDAReport_Step3
  const viewSchema_step4 = new ViewSchema_Step4
  const metadata_step5 = new Metadata_Step5

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
    workspacesPage.ClickOnUploadFile()
    createnewfile_stepone.enterlayerinfo("Automated Layer" , "This is an automated description to test adding layer to Geocore")
    createnewfile_stepone.handlePopupIfExistsAndChoose();

    //createnewfile_stepone.uploadFile('offers_geojson.csv');
    //createnewfile_stepone.errormsg()
    createnewfile_stepone.uploadedfilenamemethod('offers_geojson.csv')
    createnewfile_stepone.GoNext()
    createnewfile_stepone.handlePopupIfExistsAndChoose();

    geometryValidation_step2.GoNext()

    cy.url({ timeout: 15000 }).should('include', '/create-workspace/UPLOAD_FILE/2');

    showEDAReport_step3.ShowFullScreenOption()
    showEDAReport_step3.ShowSweetvizReport()
    showEDAReport_step3.GoNext()

    cy.url({ timeout: 15000 }).should('include', '/create-workspace/UPLOAD_FILE/3');

    viewSchema_step4.GoNext()

    cy.url({ timeout: 15000 }).should('include', '/create-workspace/UPLOAD_FILE/4');

    metadata_step5.enterTitle('Automated Layer - Metadata Title')
    metadata_step5.GoNext()

    cy.url({ timeout: 15000 }).should('include', '/create-workspace/UPLOAD_FILE/5');
  

    
  });
});
