describe('Complete a new cosigned successful application', () => {
    it('Happy Path New Cosigned application', () => {
        const { firstName, lastName, ssn, phoneNumber, streetAddress, city, zipcode, birthdate, income, employer, job, loanAmount } = Cypress.env("happyPathCosignedBorrower");
        const dateString = (new Date()).toISOString().slice(2, 19).replace(/-/g, "").replace(/:/g, "");

        //Create new account or login with existing account
        
        
        // Select Borrower
        cy.get('#label-applicantType-borrower').click();
        // Select State to attend school
        cy.get('.select2__value-container').select('CA');
        cy.get('[data-cy="next_button"]').click();
        // Select Name of School
        cy.get('.select2__value-container').select('University of California, Los Angeles');
        cy.get('[data-cy="next_button"]').click();
        // Type of Degree to receive
        cy.get('#label-loan_apps-degree_level-3').click();
        // Year in school
        cy.get('#label-loan_apps-academic_level-undergrad_junior').click();
        // Cumulative GPA
        cy.get('#input-loan_apps-gpa').type('3.85');
        cy.get('[data-cy="next_button"]').click();
        // Select major
        cy.get('.select2__value-container').select('Economics, General');
        cy.get('[data-cy="next_button"]').click();
        // Enrollment Status
        cy.get('#label-loan_apps-enrollment_status-full_time').click();
        // How taking classes
        cy.get('#label-loan_apps-enrollment_type-mostly_on_campus').click();
        // When graduating
        cy.get(':nth-child(1) > .position-relative > .form-control').select('May');
        cy.get('.pt-3 > .position-relative > .form-control').select('2024');
        cy.get('[data-cy="next_button"]').click();
        // Name
        cy.get('#input-borrower-first_name').should('contain', firstName);
        cy.get('#input-borrower-last_name').should('contain', lastName);
        cy.get('[data-cy="next_button"]').click();
        // Phone Number
        cy.get('#input-borrower-phone_primary').type(phoneNumber);
        cy.get('[data-cy="next_button"]').click();
        // Are you a US Citizen
        cy.get('#label-borrower-is_citizen-1').click();
        // Email address
        cy.get('#input-borrower-email_primary').should('contain','jdeason+' + dateString + '@ascentfunding.com');
        cy.get('#input-ignore-email_confirmation').type('jdeason+' + dateString + '@ascentfunging.com');
        cy.get('[data-cy="next_button"]').click();
        // Social Security #
        cy.get('#input-borrower-ssn').type(ssn);
        cy.get('[data-cy="next_button"]').click();
        // Address
        cy.get('#input-borrower-perm_addr1').type(streetAddress);
        cy.get('#input-borrower-perm_city').type(city);
        cy.get(':nth-child(5) > .position-relative > .form-control').select('MI');
        cy.get('#input-borrower-perm_zipcode').type(zipcode);
        cy.get('[data-cy="next_button"]').click();
        // Mailing Address
        cy.get('.checkmark-small').click();
        cy.get('[data-cy="next_button"]').click();
        // DOB
        cy.get('.form-control').type(birthdate);
        cy.get('[data-cy="next_button"]').click();
        // No Rent or Mortgage
        cy.get('#label-borrower-house_status-None').click();
        // Currently Employed
        cy.get('#label-borrower-employment_status-EMPLOYED').click();
        // Annual Income
        cy.get('#input-borrower-annual_income').type(income);
        cy.get('[data-cy="next_button"]').click();
        // Employer Name
        cy.get('#input-borrower-employer_name').type(employer);
        cy.get('[data-cy="next_button"]').click();
        // Occupation
        cy.get('#input-borrower-occupation').type(job);
        cy.get('[data-cy="next_button"]').click();
        // Optional Income
        cy.get('#label-borrower-additional_income-borrower-has_none_income > .checkmark').click();
        cy.get('[data-cy="next_button"]').click();
        // School Term
        cy.get('.form-control').select('Fall 2022');
        cy.get('[data-cy="next_button"]').click();
        // Previous Financial Aid
        cy.get('#input-loan_apps-est_fin_aid').type('0');
        cy.get('[data-cy="next_button"]').click();
        // Type of Tuition
        cy.get('#label-loan_apps-repay_inout_state-outof_state').click();
        // Requested Loan Amount
        cy.get('#input-loan_apps-request_loan_amt').type(loanAmount);
        cy.get('[data-cy="next_button"]').click();
        // Add Cosigner
        cy.get('#label-loan_apps-has_cosigner-1').click();
        cy.get('[data-cy="next_button"]').click();
        
        
        
        
        
        
        
        // Application Summary
        cy.get('.col > .btn').click();
        // Accept Disclosure
        cy.get('.col > .btn-warning').click();
        // Pre-qualified Modal
        cy.get('#loan-offer > .modal-dialog > .modal-content > .modal-body > :nth-child(1) > .text-primary').should('contain', 'Congratulations');
        cy.get('#loan-offer > .modal-dialog > .modal-content > .modal-header > .close > [aria-hidden="true"]').click();
    })
})