class CreateAccountPage {
    getEmail() {
        return cy.get('#input-email');
    }
    getPassword() {
        return cy.get('#password');
    }
    getPasswordConfirmation() {
        return cy.get('#input-password-confirmation');
    }
    getFirstName() {
        return cy.get('#input-first-name');
    }
    getLastName() {
        return cy.get('#input-last-name');
    }
    getSecurityQuestion() {
        return cy.get('#select-security-question');
    }
    getSecurityAnswer() {
        return cy.get('#input-security-answer');
    }
    getRegisterButton() {
        return cy.get('#register_submit');
    }
}
export default CreateAccountPage