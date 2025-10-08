/// <reference types="cypress" />

import LoginPage from "../support/pages/LoginPage";
import WorkSpacesPage from "../support/pages/workspacespage";
import CreateNewFile_StepOne from "../support/pages/CreateNewFile_StepOne";

describe('GeoCore - Upload Shapefile Dataset (Step 1)', () => {
  const loginpage = new LoginPage;
  const workspacesPage = new WorkSpacesPage;
  const createnewfile_stepone = new CreateNewFile_StepOne;
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
  });
});
