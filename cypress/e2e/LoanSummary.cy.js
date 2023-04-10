import LoginPage from "../support/PageObjects/LoginPage";
import LoanOfferPage from "../support/PageObjects/LoanOfferPage";
import LoanOptionsSummaryPage from "../support/PageObjects/LoanOptionsSummaryPage";
import { before } from "mocha";

const loanCSV = require('neat-csv');

describe('Check for rate interests on loan summary page', () => {

    let table;

    before(() => {

    cy
      .fixture('loan.csv')
      .then(loanCSV)
      .then(data => {
        table = data;
      })
      .then(console.table)

    })

    it('Happy Path loan rates application', () => {
        const { email, password } = Cypress.env("happyPathLoanOffersUser");
        const popUpSelectorOnLoanOffer = '#loan-offer > div > div > div.modal-body > div > div.row.mt-4 > div > a';
    

        const RateType = {
            Fixed: "Fixed",
            Variable: "Variable"
        }
        
        const RepaymentPlan = {
            Deferred: "Deferred",
            Minimum: "Minimum",
            InterestOnly: "Interest Only"
        }

        const loginPage = new LoginPage();
        loginPage.goToPage();
        loginPage.login(email, password)
          .then(() => {
            cy.document()
              .toMatchImageSnapshot();
          });

         cy.get(popUpSelectorOnLoanOffer).click();

         const loanOffer = new LoanOfferPage();
         const loanOptionsSummaryPage = new LoanOptionsSummaryPage();

         loanOffer.getLowestMonthlyPaymentsRadio().click();
         loanOffer.getNextButton().click();
         loanOffer.getFixedRadio().click();
         loanOffer.getNextButton().click();
         loanOffer.getRepay5Years().click();
         loanOffer.getNextButton().click();
         loanOffer.getRepayPlanDeferredRadio().click();
         loanOffer.getNextButton().click();
         loanOffer.getACHOptInO().click();
         loanOffer.getNextButton().click();

         loanOptionsSummaryPage.getEditLoanButton().click();

        for (let i = 0; i < 30; i++) {

            if (RateType.Fixed == table[i]['rateType'] && RepaymentPlan.Deferred == table[i]['repaymentPlan']) {

                loanOptionsSummaryPage.getFixedButton().click();
                loanOptionsSummaryPage.getDeferredButton().click();

                choseRepaymentYears(i);
            }

            else if (RateType.Fixed == table[i]['rateType'] && RepaymentPlan.Minimum == table[i]['repaymentPlan']) {

                loanOptionsSummaryPage.getFixedButton().click();
                loanOptionsSummaryPage.getMinimumButton().click();

                choseRepaymentYears(i);
            }

            else if (RateType.Fixed == table[i]['rateType'] && RepaymentPlan.InterestOnly == table[i]['repaymentPlan']) {

                loanOptionsSummaryPage.getFixedButton().click();
                loanOptionsSummaryPage.getInterestOnlyButton().click();

                choseRepaymentYears(i);
            }

            else if (RateType.Variable == table[i]['rateType'] && RepaymentPlan.Deferred == table[i]['repaymentPlan']) {

                loanOptionsSummaryPage.getVariableButton().click();
                loanOptionsSummaryPage.getDeferredButton().click();

                choseRepaymentYears(i);
            }

            else if (RateType.Variable == table[i]['rateType'] && RepaymentPlan.Minimum == table[i]['repaymentPlan']) {

                loanOptionsSummaryPage.getVariableButton().click();
                loanOptionsSummaryPage.getMinimumButton().click();

                choseRepaymentYears(i);
            }

            else if (RateType.Variable == table[i]['rateType'] && RepaymentPlan.InterestOnly == table[i]['repaymentPlan']) {

                loanOptionsSummaryPage.getVariableButton().click();
                loanOptionsSummaryPage.getInterestOnlyButton().click();

                choseRepaymentYears(i);
            }
        }

        function choseRepaymentYears(years) {

            if (table[years]['repaymentTermInYears'] == 5) {
                checkInterestRates('5y',years);
            }

            else if (table[years]['repaymentTermInYears'] == 7) {
                checkInterestRates('7y',years);
            }

            else if (table[years]['repaymentTermInYears'] == 10) {
                checkInterestRates('10y',years);
            }

            else if (table[years]['repaymentTermInYears'] == 12) {
                checkInterestRates('12y',years);
            }
            else if (table[years]['repaymentTermInYears'] == 15) {
                checkInterestRates('15y',years);
            }
        }

         function checkInterestRates (durationInYears, csvRow) {

            switch(durationInYears) {

                case '5y':
                    loanOptionsSummaryPage.getFiveYearButton().click();
                    loanOptionsSummaryPage.getInterestRates().contains(table[csvRow]['interestRate']);
                    break;
    
                case '7y':
                    loanOptionsSummaryPage.getSevenYearButton().click();          
                    loanOptionsSummaryPage.getInterestRates().contains(table[csvRow]['interestRate']);
                    break;
    
                case '10y':
                    loanOptionsSummaryPage.getTenYearButton().click();
                    loanOptionsSummaryPage.getInterestRates().contains(table[csvRow]['interestRate']);
                    break;
    
                case '12y':
                    loanOptionsSummaryPage.getTwelveYearButton().click();
                    loanOptionsSummaryPage.getInterestRates().contains(table[csvRow]['interestRate']);
                    break;
    
                case '15y':
                    loanOptionsSummaryPage.getFifteenYearButton().click();
                    loanOptionsSummaryPage.getInterestRates().contains(table[csvRow]['interestRate']);
                    break;
               
                default:
                    console.log('Given number of years not matched');
             }
         }    
    })
})
