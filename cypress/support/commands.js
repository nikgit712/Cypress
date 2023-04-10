import CreateAccountPage from "../support/PageObjects/CreateAccountPage";

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => { 
   cy.visit('/');
   cy.get('#input-email').type(email);
   cy.get('#input-password').type(password);
   cy.get('#button-submit').click();
})

Cypress.Commands.add('isLoggedIn', (email, password) => { 
  // how to determine if you are logged in  
})

Cypress.Commands.add('logout', () => {
  cy.get('#nav-dropdown').click();        
  cy.get('[data-cy="logout"]').click();
})

Cypress.Commands.add('createAccount', () => {
  const createAccountPage = new CreateAccountPage();
  const dateString = (new Date()).toISOString().slice(2, 19).replace(/-/g, "").replace(/:/g, "");

  cy.visit('/');
  cy.get('#link-create-an-account').click();
  createAccountPage.getEmail().type('jdeason+' + dateString + '@ascentfunding.com');
  createAccountPage.getPassword().type('Password123!');
  createAccountPage.getPasswordConfirmation().type('Password123!');
  createAccountPage.getFirstName().type('Qa');
  createAccountPage.getLastName().type('Test');
  createAccountPage.getSecurityQuestion().select('What is your dream job?');
  createAccountPage.getSecurityAnswer().type('QA');
  cy.get('iframe[src*=recaptcha]').its('0.contentDocument').should(d => d.getElementById('recaptcha-token').click());
  cy.wait(2000);
  createAccountPage.getRegisterButton().click();
})


//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
