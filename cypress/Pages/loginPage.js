class LoginPage {

    //Elements

    get loginbtn () {
        return cy.get('.bg-white > .bg-custom-bg')
    
    }
    
    get emailinput () {
        return cy.get('#id_user_identifier')
    
    }
    
    get passinput () {
        return cy.get('#id_password')
    
    }

    get submitbtn () {

        return cy.get('.mdc-button__ripple')
    }
    
    
    //Methods
    load () {
        cy.visit ("/")
    }
    ClickOnLoginBtn() {
        this.loginbtn.click()
    }
    
    login (email,password) {
        this.emailinput.type(email)
        this.passinput.type(password)
        this.submitbtn.click()
    }
    
    
    }
    
    
    export default LoginPage