describe('UpdateAccount', () => {
    it('Update First/Last Names and Password on Existing Account', () => {
        cy.visit('/');
        cy.login('jdeason@ascentfunding.com', 'Password123!');
        cy.get('#nav-dropdown').should('contain', 'Josh Deason').click();
        cy.get('[data-cy="updateAccount"]').click();
        cy.get('#first_name').clear().type('Michael');
        cy.get('#last_name').clear().type('Jordan');
        cy.get('#old_password').type('Password123!');
        // cy.get('#password').type('NewPassword123!');
        // cy.get('#password_confirmation').type('NewPassword123!');
        cy.get('#button-submit').click();
        cy.wait(3000);
        cy.get('#nav-dropdown').should('contain', 'Michael Jordan');
        cy.logout();
        cy.wait(3000);
        cy.login('jdeason@ascentfunding.com', 'NewPassword123!');
        cy.get('#nav-dropdown').should('contain', 'Michael Jordan');
        cy.logout();
    })
})
