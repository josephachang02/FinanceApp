const urlParams = new URLSearchParams(window.location.search);
const income = urlParams.get('MonthlyIncome');
const expenses = urlParams.get('Expenses');

let total=0;
//select all inputs
//add a change event listener to each input
//when the value changes, calculate the total of all 5 inputs
//select the total element and set text content=total variable

const subscriptionExpensesInput = document.getElementById('subscriptionExpenses');
const membershipExpensesInput = document.getElementById('membershipExpenses');
const entertainmentExpensesInput = document.getElementById('entertainmentExpenses');
const retailExpensesInput = document.getElementById('retailExpenses');
const diningExpensesInput = document.getElementById('diningExpenses');
const vacationExpensesInput = document.getElementById('vacationExpenses');

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

allPersonalInput.forEach(input => {
    input.addEventListener('change', totalPersonalExpenses);
});


const form = document.getElementById('personalForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = `SavingsDebt.html?income=${income}&expenses=${expenses}&personal=${total}`;
    });

    const clearButton = document.getElementById('clearButton');
    clearButton.addEventListener('click', function() {
        const totalPersonalInput = document.getElementById('PersonalTotal')
        totalPersonalInput.value = '';
        
        allPersonalInput.forEach(input => {
            input.value = '';
        });
    
        total = 0;
    });

const incomeDisplay = document.getElementById('incomeDisplay');

// Display the income in the <p> element
incomeDisplay.textContent = `Calculated Monthly Income: $${income}, Calculated Monthly Need Expenses: $${expenses}`;