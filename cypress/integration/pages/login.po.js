class Login {

        get userName() { return `[aria-label="Email"]`};
        get password() { return `[aria-label="Password"]`};
        get loginButton() { return `[aria-label="Log In"]`};
    
    
        login(userName, password) {
            cy.get(this.userName).type(userName);
            cy.get(this.password).type(password);
            cy.get(this.loginButton).click();
        }
    }
    
    export default new Login();