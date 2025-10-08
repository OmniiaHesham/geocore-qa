/// <reference types="cypress" />

import LoginPage from "../support/pages/LoginPage";
import WorkSpacesPage from "../support/pages/workspacespage";
import CreateNewFile_StepOne from "../support/pages/CreateNewFile_StepOne";
import AiReport_Step2 from "../support/pages/aireport_step2";
import datasetScenarios from "../fixtures/test-cases/upload-datasets.json";

describe('GeoCore - Upload Dataset Flow', () => {
  const loginpage = new LoginPage 
  const workspacesPage = new WorkSpacesPage
  const createnewfile_stepone = new CreateNewFile_StepOne
  const aireport_step2 = new AiReport_Step2
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

        aireport_step2.AssertDefaultGeometryType();

        if (coordinateFields) {
          aireport_step2.selectCoordinateFields(coordinateFields);
        }

        aireport_step2.ShowFullScreenOption();
      });
    },
  );
});
