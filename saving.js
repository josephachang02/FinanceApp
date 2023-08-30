//images shown once the button has been clicked will determine the finance health of that specific 

// if else statements to produce a total breakdown for spendings over a certain amount based on percentage over a certain amount %
//We also want to set brackets for amount spent under or over the 50/30/20 limit. ex (under 10, 5, break even, and over 5, 10).
//The 20 amount will be the amount that gives us the true health of the personal spending. 

// math breakdown 
//Needs percentage =Income/Needs. Should be close to 50% 
//Personal percentage =Income/Personal. Should be close to 30%
//Savings Percentage =Income/Personal+Needs. Should be close to 20%
// Why we want to show the needs and personal breakdown is because we want to show what improvements can be made in that specific field. Or where the person is making good progress in. 

//Possibility of 9 different if else statements to give all scenarios where the percentages are fluxuating, but that should be different from that of the actual percentage cap of over/under the 50/30/20 limit. This will also be specific to where the individual is doing something well or not in those specific fields. 
//This will mean 9 different memes. based on those conditions above. 

// 3 total sections with a console log for each 50/30/20 bracket. These conditions will be a console.log(message). For the listed bracket to show what could be made. It will be very difficult to made a very specific analysis on where the person is spending too much like housing.  However the memes will be specific to the situation based on the above/under conditions of the 50/30/20 rules

const urlParams = new URLSearchParams(window.location.search);
const income = urlParams.get('income');
const expenses = urlParams.get('expenses');
const personal = urlParams.get('total');













// window.location.href = `SavingsDebt.html?subtotal=income=${income}&expenses=${total}&Personal=${personalFinalTotalExpense}`;
// });
// let form = document.getElementById('personalForm');
// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     // let allPersonalTotal = total; //document.getElementById('NecessaryTotal').value;
//         window.location.href = `SavingsDebt.html?subtotal=income=${income}&expenses=${total}&personal=${personalFinalTotalExpense}`;
//     });

// const incomeDisplay = document.getElementById('incomeDisplay');
const incomeDisplay = document.getElementById('incomeDisplay');
// Display the income in the <p> element
incomeDisplay.textContent = `Calculated Income: $${income}, Calculated Need Expenses: $${expenses}, Calculated Personal Expenses: $${total}`;
// console.log(incomeDisplay.textContent);