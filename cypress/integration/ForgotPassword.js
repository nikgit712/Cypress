describe('Forgot Password Flow', () => {
    it('Request email to reset password', () => {
        cy.visit('/');
        cy.get('#link-forgot-password');
        cy.get('#input-email').type('jdeason@ascentfunding.com');
        //get past reCaptcha

        cy.get('#button-submit');
    })
})