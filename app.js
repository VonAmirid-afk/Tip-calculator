const tipAmount = document.querySelector(".tip-amount-holder");
const numOfPeople = document.querySelector(".num-of-p-holder");
const tipPerPerson = document.querySelector(".tip-per-person-holder");
const totalPerPerson = document.querySelector(".total-per-person-holder");
const tipPercentage = document.querySelector(".tip-percentage-holder");
const bill = document.querySelector(".bill-holder");
const btn = document.querySelector(".btn");
const totalAmount = document.querySelector(".total-amount-holder");

const tipCalculator = () => {
  const billValue = parseFloat(bill.value);
  const peopleCount = parseInt(numOfPeople.value);
  const tipPercent = parseFloat(tipPercentage.value);

  const totalTip = (billValue * tipPercent) / 100;
  tipAmount.textContent = `$${totalTip.toFixed(2)}`;

  // Calculate tip per person
  const tipEach = totalTip / peopleCount;
  tipPerPerson.textContent = `$${tipEach.toFixed(2)}`;

  // Calculate total per person
  const totalEach = (billValue + totalTip) / peopleCount;
  totalPerPerson.textContent = `$${totalEach.toFixed(2)}`;

  // Calculate total amount (bill + tip)
  const finalTotal = billValue + totalTip;
  totalAmount.textContent = `$${finalTotal.toFixed(2)}`;
  if (
    bill.value === "" ||
    numOfPeople.value === "" ||
    tipPercentage.value === "" ||
    parseFloat(bill.value) <= 0 ||
    parseInt(numOfPeople.value) <= 0 ||
    parseFloat(tipPercentage.value) < 0
  ) {
    tipAmount.textContent = "$0.00";
    totalAmount.textContent = "$0.00";
    tipPerPerson.textContent = "$0.00";
    totalPerPerson.textContent = "$0.00";
  }
};

[bill, numOfPeople, tipPercentage].forEach((inputField) => {
  inputField.addEventListener("input", tipCalculator);
});
