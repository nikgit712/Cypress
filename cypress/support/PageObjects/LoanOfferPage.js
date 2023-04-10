class LoanOfferPage {
    getBackButton() {
        return cy.get('[data-cy="back_button"]');
    }
    getNextButton() {
        return cy.get('[data-cy="next_button"]');
    }
    getLowestMonthlyPaymentsRadio() {
        return cy.get('#input-ignore-loan_offer_preset-monthlyPayments');
    }
    getTotalCostLowAsPossibleRadio() {
        return cy.get('#input-ignore-loan_offer_preset-overallCost');
    }
    getLowestMonthlyPaymentsDeferredRadio() {
        return cy.get('#input-ignore-loan_offer_preset-deferredPayments');
    }
    getTotalCostLowAsPossibleDeferredRadio() {
        return cy.get('#input-ignore-loan_offer_preset-deferredCost');
    }
    getFixedRadio() {
        return cy.get('#input-loan_apps-loan_type-Fixed');
    }
    getVariableRadio() {
        return cy.get('#input-loan_apps-loan_type-Variable');
    }
    getRepay5Years() {
        return cy.get('#label-loan_apps-repay_months-60');
    }
    getRepay7Years() {
        return cy.get('#label-loan_apps-repay_months-84');
    }
    getRepay10Years() {
        return cy.get('#label-loan_apps-repay_months-120');
    }
    getRepay12Years() {
        return cy.get('#label-loan_apps-repay_months-144');
    }
    getRepay15Years() {
        return cy.get('#label-loan_apps-repay_months-180');
    }
    getRepay20Years() {
        return cy.get('#label-loan_apps-repay_months-240');
    }
    getRepayPlanDeferredRadio() {
        return cy.get('#input-loan_apps-repay_plan-DeferredRepayment');
    }
    getRepayPlanMinimumRadio() {
        return cy.get('#input-loan_apps-repay_plan-MinimumPayment');
    }
    getRepayInterestOnlyRadio() {
        return cy.get('#input-loan_apps-repay_plan-InterestOnly');
    }
    getACHOptInO() {
        return cy.get('#label-loan_apps-ach_optin-true');
    }
    getACHOptOut() {
        return cy.get('#label-loan_apps-ach_optin-false');
    }
    getAcknowledgeCheckbox() {
        return cy.get('#input-credit-checkbox');
    }
    getConfirmNoButton() {
        return cy.get('[data-cy="notSubmitting_backButton"]');
    }
}
export default LoanOfferPage
