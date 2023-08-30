const urlParams = new URLSearchParams(window.location.search);
const income = urlParams.get('income');
const expenses = urlParams.get('expenses');

let total=0;
//select all inputs
//add a change event listener to each input
//when the value changes, calculate the total of all 5 inputs
//select the total element and set text content=total variable

const subscriptionExpensesInput = document.getElementById('SubscriptionExpenses');
const membershipExpensesInput = document.getElementById('MembershipExpenses');
const entertainmentExpensesInput = document.getElementById('EntertainmentExpenses');
const retailExpensesInput = document.getElementById('RetailExpenses');
const diningExpensesInput = document.getElementById('DiningExpenses');
const vacationExpensesInput = document.getElementById('VacationExpenses');

//select all inputs
const allPersonalInput = document.querySelectorAll('.personalInput input');

const totalPersonalExpenses=()=>{
    // let total = 0;
    allPersonalInput.forEach(input => {
        // {console.log(input, total)
        total += parseFloat(input.value) || 0;
    });

    let totalField = document.getElementById('PersonalTotal');
    totalField.value = total;
};
// console.log(totalField);
allPersonalInput.forEach(input => {
    input.addEventListener('change', totalPersonalExpenses);
});


const form = document.getElementById('personalForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    // let allPersonalTotal = total; //document.getElementById('NecessaryTotal').value;
    window.location.href = `SavingsDebt.html?subtotal=${income}&expenses=${total}&personal=${total}`;
    });

const incomeDisplay = document.getElementById('incomeDisplay');

// Display the income in the <p> element
incomeDisplay.textContent = `Calculated Income: $${income}, Calculated Need Expenses: $${expenses}`;