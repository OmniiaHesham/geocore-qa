/// <reference types="cypress" />

import LoginPage from "../support/pages/LoginPage";
import WorkSpacesPage from "../support/pages/workspacespage";
import CreateNewFile_StepOne from "../support/pages/CreateNewFile_StepOne";
import GeometryValidation_Step2 from "../support/pages/Geometry-Validation_Step2";
import ShowEDAReport_Step3 from "../support/pages/Show-EDA-Report_Step3";
import ViewSchema_Step4 from "../support/pages/viewschema_step4";
import Metadata_Step5 from "../support/pages/Metadata_Step5";

describe('GeoCore - Upload Shapefile Dataset (Step 1)', () => {
  const loginpage = new LoginPage;
  const workspacesPage = new WorkSpacesPage;
  const createnewfile_stepone = new CreateNewFile_StepOne;
  const geometryValidation_step2 = new GeometryValidation_Step2;
  const showEDAReport_step3 = new ShowEDAReport_Step3;
  const viewSchema_step4 = new ViewSchema_Step4;
  const metadata_step5 = new Metadata_Step5;
  const username = Cypress.env('geocoreUsername');
  const password = Cypress.env('geocorePassword');

  if (!username || !password) {
    throw new Error('Missing GEOCORE credentials. Check environment variables.');
  }

  before(() => {
    loginpage.load();
    loginpage.openLoginForm();
    loginpage.login(username, password);
    cy.url().should('include', '/dashboard');
  });

  it('completes Step 1 with a Shapefile upload', () => {
    workspacesPage.ClickOnUploadFile();
    createnewfile_stepone.enterlayerinfo(
      "Automated Shapefile Layer",
      "Automated test to upload shapefile dataset to Geocore"
    );
    createnewfile_stepone.handlePopupIfExistsAndChoose();

    createnewfile_stepone
      .uploadFile('datasets/offers_shape.zip')
      .then((uploadedFile) => createnewfile_stepone.uploadedfilenamemethod(uploadedFile))
      .then(() => createnewfile_stepone.GoNext());

    createnewfile_stepone.handlePopupIfExistsAndChoose();

    cy.get('.space-y-4 > .space-y-2 > [data-testid="geocore-select-element"]', { timeout: 15000 })
      .should('be.visible');

    geometryValidation_step2.GoNext();

    cy.url({ timeout: 15000 }).should('include', '/create-workspace/UPLOAD_FILE/2');

    showEDAReport_step3.ShowFullScreenOption();
    showEDAReport_step3.ShowSweetvizReport();
    showEDAReport_step3.GoNext();

    cy.url({ timeout: 15000 }).should('include', '/create-workspace/UPLOAD_FILE/3');

    viewSchema_step4.GoNext();

    cy.url({ timeout: 15000 }).should('include', '/create-workspace/UPLOAD_FILE/4');

    metadata_step5.enterTitle('Automated Shapefile Layer - Metadata Title');
    metadata_step5.GoNext();

    cy.url({ timeout: 15000 }).should('include', '/create-workspace/UPLOAD_FILE/5');
  });
});
