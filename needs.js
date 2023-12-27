const urlParams = new URLSearchParams(window.location.search);
const income = parseFloat(urlParams.get('income'));

let total=0;

const housingExpensesInput = document.getElementById('housingExpenses');
const foodExpensesInput = document.getElementById('foodExpenses');
const utilitiesExpensesInput = document.getElementById('utilitiesExpenses');
const transportationExpensesInput = document.getElementById('transportationExpenses');
const childCareExpensesInput = document.getElementById('childCareExpenses');

//select all inputs
const allNeedsInput = document.querySelectorAll('.needsInput input');

const totalNeedExpenses=()=>{
    let total = 0;
    allNeedsInput.forEach(input => {
        total += parseFloat(input.value) || 0;
    // console.log(input); console.log(input.value);
    });

    let totalField = document.getElementById('NecessaryTotal');
    // console.log(total); 
    // console.log(totalField);
    totalField.value = total.toFixed(2);;
    return totalField
};
//add a change event listener to each input
allNeedsInput.forEach(input => {
    input.addEventListener('change', totalNeedExpenses);
});

    const form = document.getElementById('necessaryForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        // const endSubNeed = document.getElementById('NecessaryTotal').value + document.getElementById('incomeInitial').value; 
        // Assuming you want to navigate to 'result.html'
        window.location.href = `PersonalSpendings.html?income=${income}&expenses=${total}`;
    });

    const clearButton = document.getElementById('clearButton');
    clearButton.addEventListener('click', function() {
        const totalNecessaryInput = document.getElementById('NecessaryTotal')
        totalNecessaryInput.value = '';
        
        allNeedsInput.forEach(input => {
            input.value = '';
        });
    
        total = 0;
    });


//Moving calculated income from previous page to the current page with the p id-"incomeDisplay"
// const queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);

// // Get the "income" parameter value from the query string
// const income = urlParams.get('income');

// Select the <p> element to display the income
const incomeDisplay = document.getElementById('incomeDisplay');

// Display the income in the <p> element
incomeDisplay.textContent = `Calculated Income: $${income}`;
