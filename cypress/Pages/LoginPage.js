class LoginPage {
    // Elements
  
    get loginTriggerButton() {
      return cy.contains('button', /تسجيل الدخول|Login/);
    }
  
    get loginFormContainer() {
      return cy.get('.bg-white > .bg-custom-bg');
    }
  
    get emailInput() {
      return cy.get('#id_user_identifier', { timeout: 15000 }).should('be.visible');
    }
    
    get passInput() {
      return cy.get('#id_password', { timeout: 15000 }).should('be.visible');
    }
    
  
    get loginButton() {
      return cy.get('.mdc-button__ripple');
    }
  
    // Methods
  
    load() {
      cy.visit('/');
    }
  
    openLoginForm() {
      this.loginTriggerButton.click();
      this.loginFormContainer.should('exist').click();
    }
  
    login(email, password) {
      this.emailInput.type(email);
      this.passInput.type(password);
      this.loginButton.should('be.visible').click();
    }
  }
  
  export default LoginPage;
  