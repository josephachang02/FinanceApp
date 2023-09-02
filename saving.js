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
const personal = urlParams.get('personal');
const necessitiesButton = document.getElementById('revealNecessities'); 
const NecessitiesPTag = document.getElementById('necessitiesResult');
const personalButton = document.getElementById('revealPersonal');
const PersonalPTag = document.getElementById('personalResult');
const savingsButton = document.getElementById('revealSavings');
const SavingsPTag = document.getElementById('savingsResult');
const FinanceButton = document.getElementById('RevealFinanceBtn');
const RevealMemeImage = document.getElementById('MemeImage');



const incomeDisplay = document.getElementById('incomeDisplay');
// Display the income in the <p> element
incomeDisplay.textContent = `Calculated Income: $${income}, Calculated Need Expenses: $${expenses}, Calculated Personal Expenses: $${personal}`;



//Retrieving the value of the total saved which will be the difference of the income and the (spendings/necesities) combined
const spentTotal = expenses + personal;
const savedTotal = income - spentTotal;

// Percentage of the Amount divided by the total income
const needPercentage = (expenses/income) * 100; 
const personalPercentage = (personal/income) * 100;
const savingsPercentage = (savedTotal /income) * 100;

//Personal spendings console.log brackets for when the amount is either or differences. 
const needsResult = needPercentage;
const personalResult = personalPercentage;
const savingsResult = savingsPercentage;


//event listener for the buttons, once clicked they will populate the specific text parameters that fit the given variable 
necessitiesButton.addEventListener('click', ()=>{
//Necesities Messaging Console 
 let finalText;
    if (needPercentage > 0 && needPercentage <= 30) {
        finalText ="Lots of Room for Savings. Take advantage of the savings you make";
    } else if (needPercentage > 30 && needPercentage <= 45) {
        finalText = "good. Making good financial decisions with the ammount that you save.";
    } else if (needPercentage > 45 && needPercentage <= 55) {
        finalText ="You are spending just at the typical range where necessities reach. Break even";
    } else if (needPercentage > 55 && needPercentage <= 65) {
        finalText ="exceeding the threshold for what a typical necesities budget considers. You might want to reconsider your housing situation that can be improved. There are also some ways to change your necesities such as taking the bus instead of driving, or monitor you grocery spendings.";
    } else if (needPercentage > 65) {
        finalText ="WAYY too much in necessary Spending. Consider options of how you can greatly reduce your spendings in Housing and Groceries. ";
    }

    NecessitiesPTag.textContent = finalText;
});

personalButton.addEventListener('click', ()=>{

    let personalText;
    if (personalPercentage > 0 && personalPercentage <= 15) {
        personalText ="Very Low Personal Spending. It is healthhy to utilize these types of spendings to improve your quality of life. It might even be suggested that you pool more into this amount that can contribute to your health, hobbies and overall well-being";
    } else if (personalPercentage > 15 && personalPercentage <= 25) {
        personalText ="little. You are utilizing your spendings in a very controlled manner. ";
    } else if (personalPercentage > 25 && personalPercentage <= 35) {
        personalText ="Break Even.";
    } else if (personalPercentage > 35 && personalPercentage <= 45) {
        personalText ="more";
    } else if (personalPercentage > 45) {
        personalText ="WAYY Too much Spending in your Personal. To optimize your savings, its important to evaluate your  own spendings that you do and reconsider what kind of lifestyle changes can be made to adjust those";
    }

    PersonalPTag.textContent = personalText;
});

//Personal Spending Messaging Console. 30 is even 
savingsButton.addEventListener('click', ()=>{

    let savingsText; 
    if (savingsPercentage <= 0) {
        savingsText ="Spending  more than you are making";
    } else if(savingsPercentage > 0 && savingsPercentage <= 10) {
        savingsText ="Very little to no savings made";
    } else if (savingsPercentage > 10 && savingsPercentage <= 15) {
        savingsText ="Getting closer to a good savings amount, however some changes in the personal spending would be helpful";
    } else if (savingsPercentage > 15 && savingsPercentage <= 25) {
        savingsText ="At the green line standard of where you should typically be saving. ";
    } else if (savingsPercentage > 25 && savingsPercentage <= 35) {
        savingsText ="Saving more than the recommended amount";
    } else if (savingsPercentage > 35 && savingsPercentage <= 50) {
        savingsText ="Saving Farm more than the exceed amount";
    }

    SavingsPTag.textContent = savingsText;
});


// This is where the add event listener will populate a meme based on the criteria of the user's finance report. We can group together several statuses that will create a very specific meme based on the user's 

// for this example, we want to create the unique idenifier that will const a specific sceanrio for the amount, once we have set that identifier then we can if == then meme =x. 


//create unique identifiers that will not interfere with the previous statuses from above, if those same conditions are used they will conflict with the previous statuses. We need to recreate those same statuses above but with a unique name that can be used below. 

let desperationMeme=(savingsPercentage <=0 || personalPercentage > 35 && personalPercentage <= 45 || needPercentage > 55 && needPercentage <= 65);





FinanceButton.addEventListener("click", ()=> {
    let Meme ='';
    if (desperationMeme) {
        Meme = "https://media0.giphy.com/media/gKfyusl0PRPdTNmwnD/giphy.gif?cid=ecf05e47olecwa440sa3f240dn2ly04sdy5z9aaqpyf9xd0e&ep=v1_gifs_search&rid=giphy.gif&ct=g";
    }
    RevealMemeImage.src = Meme;
});






// window.location.href = `SavingsDebt.html?subtotal=income=${income}&expenses=${total}&Personal=${personalFinalTotalExpense}`;
// });
// let form = document.getElementById('personalForm');
// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     // let allPersonalTotal = total; //document.getElementById('NecessaryTotal').value;
//         window.location.href = `SavingsDebt.html?subtotal=income=${income}&expenses=${total}&personal=${personalFinalTotalExpense}`;
//     });

// const incomeDisplay = document.getElementById('incomeDisplay');

// console.log(incomeDisplay.textContent);