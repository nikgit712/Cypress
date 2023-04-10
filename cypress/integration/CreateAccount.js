// describe('Create Account flow', () => {
//     it('Create a new Account', () => {
//         const { username, password, fullName } = Cypress.env("baseTestUser");
//         cy.visit('/');
//         cy.get('#link-create-an-account').click();
//         cy.get('.col-sm-10 > .text-primary').should('contain', 'Create Your Account');
//         const dateString = (new Date()).toISOString().slice(2, 19).replace(/-/g, "").replace(/:/g, "");
//         cy.get('#input-email').type('jdeason+' + dateString + '@ascentfunding.com');
//         cy.get('#password').type(password);
//         cy.get('#input-password-confirmation').type(password);
//         cy.get('#input-first-name').type('Qa');
//         cy.get('#input-last-name').type('Test');
//         cy.get('#select-security-question').select('What is your dream job?');
//         cy.get('#input-security-answer').type('Ascent');
//         cy.get('iframe[src*=recaptcha]').its('0.contentDocument').should(d => d.getElementById('recaptcha-token').click());
//         cy.wait(2000);
//         cy.get('#register_submit').click();
//         cy.get('#nav-dropdown').should('contain', 'Qa Test');
//     })
// })



import CreateAccountPage from "../support/PageObjects/CreateAccountPage";

describe('Create Account flow', () => {
    it('Create a new Account', () => {
        const createAccountPage = new CreateAccountPage();
        const { password, firstName, lastName } = Cypress.env("createAccountUser");
        
        cy.createAccount();

        // Need to figure out a way past the Verify Your Email confirmation code step

        
        cy.get('#nav-dropdown').should('contain', 'Qa Test');
    })
})