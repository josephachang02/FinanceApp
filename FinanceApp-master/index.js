//Navigation of App.HTML to 'NeedsObligation.html' through Submit Event
    const form = document.getElementById('incomeInitial');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const income = parseFloat(document.getElementById('TotalIncome').value) / 12;
        // Assuming you want to navigate to 'result.html'

        const formattedIncome = income.toFixed(2).toLocaleString(undefined, { minimumFractionDigits: 2 });

        window.location.href = `NeedsObligation.html?MonthlyIncome=${formattedIncome}`;
    });

    const clearButton = document.getElementById('clearButton');
    clearButton.addEventListener('click', function() {
        const totalIncomeInput = document.getElementById('TotalIncome');
        totalIncomeInput.value = ''; // Clear the input field
    });
// reason why i only want the clear button is to remove the values 





// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.getElementById('incomeNecessities');
//     const totalAmountSpan = document.getElementById('totalAmount');
//     const housingExpensesInput = document.getElementById('housingExpenses');

//     form.addEventListener('submit', function(event) {
//         event.preventDefault(); // Prevent form submission

//         const housingExpenses = parseFloat(housingExpensesInput.value);
//         const currentTotal = parseFloat(totalAmountSpan.innerText);
//         const newTotal = currentTotal + housingExpenses;

//         totalAmountSpan.innerText = newTotal.toFixed(2); // Update the total with two decimal places
//     });
// });