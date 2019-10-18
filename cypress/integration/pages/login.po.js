class Login {

        get userName() { return `[aria-label="Email"]`};
        get password() { return `[aria-label="Password"]`};
        get loginButton() { return `.auth0-label-submit`};
    
    
        login(userName, password) {
            cy.get(this.userName).type(userName);
            cy.get(this.password).type(password);
            cy.get(this.loginButton, {timeout: 5000}).click();
        }
    }
    
    export default new Login();