class LoginPage {
    goToPage() {
        cy.visit('/');
    }
    getEmail() {
        return cy.get('#input-email');
    }
    getPassword() {
        return cy.get('#input-password');
    }
    getLoginButton() {
        return cy.get('#button-submit');
    }
    login(email, password) {
        this.getEmail().type(email);
        this.getPassword().type(password);
        this.getLoginButton().click();
    }
}
export default LoginPage