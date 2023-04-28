//Exercise 6 : Bank Details

//Create a global variable called bankAmount which value is the amount of money currently in your account.

let bankAmount = 4000;
const vatRate = 0.17;
const details = ["+200", "-100", "+146", "+167", "-2900"];

function applyVAT(expense) {
  return expense * (1 + vatRate);
}

function currentBankAmount(bankAmount, details) {
  details.forEach((detail) => {
    let expense = parseInt(detail);
    expense = applyVAT(expense);
    bankAmount += expense;
  });
  return bankAmount;
}

bankAmount = currentBankAmount(bankAmount, details);
console.log(`Current Bank Account: ${bankAmount}`);


