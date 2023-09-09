const urlParams = new URLSearchParams(window.location.search);
const formattedIncome = urlParams.get('MonthlyIncome');

let total=0;

const housingExpensesInput = document.getElementById('housingExpenses');
const foodExpensesInput = document.getElementById('foodExpenses');
const utilitiesExpensesInput = document.getElementById('utilitiesExpenses');
const transportationExpensesInput = document.getElementById('transportationExpenses');
const childCareExpensesInput = document.getElementById('childCareExpenses');

//select all inputs
const allNeedsInput = document.querySelectorAll('.needsInput input');
const totalField = document.getElementById('NecessaryTotal');

const updateTotalNeedExpenses=()=>{
    let total = 0;
    allNeedsInput.forEach(input => {
        total += parseFloat(input.value) || 0;
    });

    totalField.value = total;
};
//add a change event listener to each input
allNeedsInput.forEach(input => {
    input.addEventListener('change', updateTotalNeedExpenses);
});
//when the value changes, calculate the total of all 5 inputs

//select the total element and set text content=total variable
//I want the needTotal to show up in the inputID->NecessaryTotal. 
//disabled so a manual input cannot be inclued
//I think i want to have the 

// let form = document.getElementById('necessaryForm');

// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     let needTotal = total;
//     let personalNeedTotal = total + income;
    

//     getElementById('NecessaryTotal').value;
//         window.location.href = `PersonalSpendings.html?necessarysubtotal=${personalNeedTotal}`;
//     });

    const form = document.getElementById('necessaryForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        // const endSubNeed = document.getElementById('NecessaryTotal').value + document.getElementById('incomeInitial').value; 
        // Assuming you want to navigate to 'result.html'
        const personalNeedTotal = totalField.value;
        window.location.href = `PersonalSpendings.html?MonthlyIncome=${formattedIncome}&MonthlyExpenses=${personalNeedTotal}`;
    });

    const clearButton = document.getElementById('clearButton');
    clearButton.addEventListener('click', function() {
        totalField.value = '';
        
        allNeedsInput.forEach(input => {
            input.value = '';
        });
    
        total = 0;
    });

const incomeDisplay = document.getElementById('incomeDisplay');

incomeDisplay.textContent = `Calculated Monthly Income: $${formattedIncome}`;
