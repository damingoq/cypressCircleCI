import loginPo from "../pages/login.po";

describe('b spec', function() {
    beforeEach(() =>  {
        cy.visit('https://demo.cloud.oqton.ai', 10000)
    });

    it('Login', function() {
        loginPo.login(`daming.du@oqton.com`, `6d6@'JmT5m]N.wTx`);
    });
})