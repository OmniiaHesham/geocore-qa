/// <reference types="cypress" />

import LoginPage from "../support/pages/LoginPage";
import WorkSpacesPage from "../support/pages/workspacespage";
import CreateNewFile_StepOne from "../support/pages/CreateNewFile_StepOne";
import GeometryValidation_Step2 from "../support/pages/Geometry-Validation_Step2";
import ShowEDAReport_Step3 from "../support/pages/Show-EDA-Report_Step3";
import ViewSchema_Step4 from "../support/pages/viewschema_step4";
import Metadata_Step5 from "../support/pages/Metadata_Step5";
import datasetScenarios from "../fixtures/test-cases/upload-datasets.json";

describe('GeoCore - Upload Dataset Flow', () => {
  const loginpage = new LoginPage 
  const workspacesPage = new WorkSpacesPage
  const createnewfile_stepone = new CreateNewFile_StepOne
  const geometryValidation_step2 = new GeometryValidation_Step2
  const showEDAReport_step3 = new ShowEDAReport_Step3
  const viewSchema_step4 = new ViewSchema_Step4
  const metadata_step5 = new Metadata_Step5
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

  beforeEach(() => {
    cy.visit('/dashboard');
  });

  datasetScenarios.forEach(
    ({ name, layerName, description, fixture, coordinateFields }) => {
      it(`should upload ${name}`, () => {
        workspacesPage.ClickOnUploadFile();
        createnewfile_stepone.enterlayerinfo(layerName, description);
        createnewfile_stepone.handlePopupIfExistsAndChoose();

        createnewfile_stepone
          .uploadFile(fixture)
          .then((uploadedFile) =>
            createnewfile_stepone.uploadedfilenamemethod(uploadedFile),
          )
          .then(() => createnewfile_stepone.GoNext());

        createnewfile_stepone.handlePopupIfExistsAndChoose();

        geometryValidation_step2.AssertDefaultGeometryType();

        if (coordinateFields) {
          geometryValidation_step2.selectCoordinateFields(coordinateFields);
        }

        geometryValidation_step2.GoNext();

        cy.url({ timeout: 15000 }).should('include', '/create-workspace/UPLOAD_FILE/2');

        showEDAReport_step3.ShowFullScreenOption();
        showEDAReport_step3.ShowSweetvizReport();
        showEDAReport_step3.GoNext();

        cy.url({ timeout: 15000 }).should('include', '/create-workspace/UPLOAD_FILE/3');

        viewSchema_step4.GoNext();

        cy.url({ timeout: 15000 }).should('include', '/create-workspace/UPLOAD_FILE/4');

        metadata_step5.enterTitle(`${layerName} - Metadata Title`);
        metadata_step5.GoNext();

        cy.url({ timeout: 15000 }).should('include', '/create-workspace/UPLOAD_FILE/5');
      });
    },
  );
});
