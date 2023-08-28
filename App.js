document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('incomeInitial');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        const totalIncome = document.getElementById('TotalIncome').value;
        // Assuming you want to navigate to 'result.html'
        window.location.href = `NeedsObligation.html?income=${totalIncome}`;
    });
});