class LoanOptionsSummaryPage {
    getEditLoanButton() {
        return cy.get('#edit-loan-summary-cta');
    }
    getSaveLoanButton() {
        return cy.get('#save-loan-summary-cta');
    }
    getBackButton() {
        return cy.get('#loan-options-summary-back-button');
    }
    getFixedButton() {
        return cy.get('#label-loan_apps-loan_type-Fixed');
    }
    getVariableButton() {
        return cy.get('#label-loan_apps-loan_type-Variable');
    }
    getFiveYearButton() {
        return cy.get('#label-loan_apps-repay_months-60');
    }
    getSevenYearButton() {
        return cy.get('#label-loan_apps-repay_months-84');
    }
    getTenYearButton() {
        return cy.get('#label-loan_apps-repay_months-120');
    }
    getTwelveYearButton() {
        return cy.get('#label-loan_apps-repay_months-144');
    }
    getFifteenYearButton() {
        return cy.get('#label-loan_apps-repay_months-180');
    }
    getTwentyYearButton() {
        return cy.get('#label-loan_apps-repay_months-240');
    }
    getDeferredButton() {
        return cy.get('#label-loan_apps-repay_plan-DeferredRepayment');
    }
    getMinimumButton() {
        return cy.get('#label-loan_apps-repay_plan-MinimumPayment');
    }
    getInterestOnlyButton() {
        return cy.get('#label-loan_apps-repay_plan-InterestOnly');
    }
    getAutoPaymentsSlider() {
        return cy.get('.checkbox-slider circle');
    }
    getCheckbox() {
        return cy.get('.checkmark-small');
    }
    getSubmitButton() {
        return cy.get('#button-loan-option-submit');
    }
    getInterestRates() {
        return cy.get('.font-weight-600');
    }
}
export default LoanOptionsSummaryPage
