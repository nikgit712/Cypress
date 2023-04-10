// describe('Login/Logout', () => {
//     it('Login with existing account then logout', () => {
//         const { username, password, fullName } = Cypress.env("baseTestUser");
//         cy.login(username, password);
//         cy.get('#nav-dropdown').should('contain', fullName);
//         cy.logout();
//     })
// })


import LoginPage from "../support/PageObjects/LoginPage";

describe('Login/Logout', () => {
    it('Login with existing account then logout', () => {
        const loginPage = new LoginPage();
        const { username, password, fullName } = Cypress.env("baseTestUser");

        cy.visit('/');
        loginPage.getEmail().type(username);
        loginPage.getPassword().type(password);
        loginPage.getLoginButton().click();
        cy.get('#nav-dropdown').should('contain', fullName);
        // cy.logout();
    })
})