window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = { amount: 10000, years: 10, rate: 4.5 };
  const AmountUI = document.getElementById("loan-amount");
  const YearsUI = document.getElementById("loan-years");
  const RateUI = document.getElementById("loan-rate");
  AmountUI.value = values.amount;
  YearsUI.value = values.years;
  RateUI.value = values.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentUIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUIValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const pir = ((values.rate / 100) / 12);
  const n = (values.years * 12);
  const top = (values.amount * pir);
  const bottom = (1 - Math.pow((1 + pir), -n));
  const monthpayment = (top / bottom).toFixed(2);
  return (monthpayment);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let paymentUI = document.getElementById("monthly-payment");
  paymentUI.innerText = "$" + monthly;
}
