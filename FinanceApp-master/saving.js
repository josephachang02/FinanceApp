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
const popMemeDescription = document.getElementById('MemeDescription');
const revealFinanceBtn = document.getElementById('revealFinanceBtn');
const popFinanceDescription = document.getElementById('financeDescription');



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
        finalText ="WAYY too much in necessary Spending. Consider options of how you can greatly reduce your spending in Housing and Groceries. ";
    }

    NecessitiesPTag.textContent = finalText;
});

personalButton.addEventListener('click', ()=>{

    let personalText;
    if (personalPercentage > 0 && personalPercentage <= 15) {
        personalText ="Very Low Personal Spending. It is healthy to utilize these types of spendings to improve your quality of life. It might even be suggested that you pool more into this amount that can contribute to your health, hobbies and overall well-being";
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
    } else if (savingsPercentage > 50) {
        savingsText ="Saving Farm more than the exceed amount";
    }

    SavingsPTag.textContent = savingsText;
});


// This is where the add event listener will populate a meme based on the criteria of the user's finance report. We can group together several statuses that will create a very specific meme based on the user's 

// for this example, we want to create the unique idenifier that will const a specific sceanrio for the amount, once we have set that identifier then we can if == then meme =x. 


//create unique identifiers that will not interfere with the previous statuses from above, if those same conditions are used they will conflict with the previous statuses. We need to recreate those same statuses above but with a unique name that can be used below. 

// adding income brackets will help to specify the conditions. 
const lowIncome = (income <= 2083); //25,000
const lowMidIncome = (income > 2083 && income <= 4166); //25,000 and 50,000
const highMidIncome = (income > 4166 && income <= 8333); //50,000 and 100,000
const highIncome = (income > 8333); //>100,000





// low income bracket using arrays to be accessible. 

const incomeBracket = [
    { category: 'low', condition: (income <= 2083), message: "Although your generated monthly income puts you in the low-income tier, that shouldn't discourage you from your ability to build up savings slowly overtime. However, based on your generated income no matter how much you cut on spending, this will hinder your ability to make flexible financial changes or large purchases in the future. If you are not already in the process of working towards or changing career path, consider your options for optimizing an opportunity towards a career that interests you that can simultaneously improve your earnings. ",
    },
    { category: 'lowMid', condition: (income > 2083 && income <= 4166), message: "Your income falls within the lower mid-range. While you may not be in the highest earning bracket, you have room for improvement and the potential to increase your financial stability. Focus on responsible financial management and look for opportunities to boost your income or savings to work towards your financial goals.",
    },
    { category: 'highMid', condition: (income > 4166 && income <= 8333), message: "Your income is in the higher mid-range. You are in a position to capitalize on your earning potential, and with smart financial management, you can make meaningful strides toward your financial goals. Consider optimizing your financial strategies and saving wisely to secure your financial future. "
    },
    { category: 'high', condition: (income > 8333), message: "You're monthly income puts you in a secure and sustainable financial position. This will allow you to save money at a higher and faster rate, which can make the process of long-term or larger purchases smoother. Nonetheless, your income alone does not protect you against poor spending management. Take advantage of your overall earnings to provide yourself with a sustainable lifestyle that contributes towards a net-positive savings. ",
    },
];

const needBracket = [
    { category: 'low', condition: (needPercentage > 0 && needPercentage <= 30), message: "You are in a good financial position where your allocated necessities are not hindering your overall income. Take advantage of your situation and utilize those benefits to reap greater earnings for future savings. With less expenses to be mindful of, you have more flexibility to utilize your earnings towards personal expenses and savings. But be mindful of any potential changes in this category, as it will directly affect your overall financial flexibility. ",
    },
    { category: 'good', condition: (needPercentage > 30 && needPercentage <= 45), message: "Your allocation of necessities is in a healthy range. You are maintaining a balance between meeting essential needs and having some financial flexibility. This provides you with the opportunity to save and invest in your personal well-being. To continue on this positive path, consider looking for opportunities to optimize your spending and increase your savings. " ,
    },
    { category: 'even', condition: (needPercentage > 45 && needPercentage <= 55), message: "Your necessary spending falls within the typical range. You are allocating a significant portion of your income to essentials, and it's important to maintain this balance. Be mindful of any changes that may affect your necessity spending, as it can impact your overall financial situation. Consider reviewing your expenses regularly to identify areas where you can make small adjustments to improve your financial health. " ,
    },
    { category: 'high', condition: (needPercentage > 55 && needPercentage <= 65), message: "Your necessity spending exceeds the typical range for essentials. This can put pressure on your overall financial health and flexibility. It's essential to address this situation by identifying areas where you can cut exceeding costs. Consider exploring options such as moving to a more affordable housing unit, creating a detailed grocery list and adhering to it to manage grocery expenses better, or changing your transportation method to reduce commuting costs. These changes can significantly enhance your financial situation and provide you with more financial freedom and earn you larger savings. ",
    },
    { category: 'vHigh', condition: (needPercentage > 65), message: "Your accumulated necessary spending is exceptionally high. Because a large majority of the categories comprise of costly goods, and necessities are also the most expensive, it's important to address this situation as it can significantly impact your overall financial health and flexibility to utilize your personal spendings/savings. Go back to this section and re-evaluate which categories can be improved. Consider options such as; move to a housing unit that suits your income (30%), creating a grocery list and sticking to it, or changing forms of transportation. As they can drastically improve your overall financial health and flexibility. " , 
    },
];

const personalBracket = [
    { category: 'vLow', condition: (personalPercentage <= 15), message: "Your personal spending rate is very low, and this can mean different things for various people such as; inability to expend on personal uses due to exceeding pressure from your necessities, frugal/strong discipline with personal spendings. That being said, you're spending less than 15% of your own income on yourself. If your budget grants you the ability to make those purchases, you should allocate spending towards activities/purchases that can improve your quality of life and well-being. ", 
    },
    { category: 'lowGood', condition: (personalPercentage > 15 && personalPercentage <= 25), message: "Your personal spending habits are in a healthy and reasonable range. Your reports indicate that you maintain good control over your own discretionary expenses. Although your personal spendings are in a healthy and reasonable range, you should also consider the other factors that contribute to your overall financial performance. Nonetheless, continue to practice smart and financial spendings that will help to optimize your financial health. ", 
    
    },
    { category: 'even', condition: (personalPercentage > 25 && personalPercentage < 35), message: "Your personal spending is fairly balanced. You're neither overspending nor underspending in this category. However, this balance provides an opportunity for you to further fine-tune your spending habits. Consider looking back at the page as a reference for creating a detailed budget to track and manage your personal expenses more efficiently. This will help you make informed decisions and allocate resources more effectively." ,
    },
    { category: 'high', condition: (personalPercentage >= 35 && personalPercentage <= 45), message: "Your personal spending is on the higher side. While it's essential to enjoy personal expenses, it's also important to ensure that your spending aligns with your financial goals/circumstances. Consider reviewing your discretionary spending and identifying areas where you can make adjustments without significantly sacrificing your quality of life. Small changes in personal spending can lead to significant savings over time as well as build financial discipline. ",
    },
    { category: 'vHigh', condition: (personalPercentage > 45), message: "Your current personal spending habits can quickly deplete your finances. To improve your financial situation, identify the areas that largely contribute to your personal spending and create a plan towards cutting out those expenses. Know that a lot of these changes will affect your current lifestyle quite drastically, and it is difficult to accept those changes, but this will lead you in the direction of making future long-term purchases/investments with a solid financial foundation. ",
    },
];

const savingsBracket = [
    { category: 'losing', condition: (savingsPercentage <= 0), message: "Overall, your total spending exceeds your earnings on a monthly basis. Regardless of your own personal lifestyle or income, it would be crucial to take action with some of the suggestions above. Know that there will be significant lifestyle changes, but this is to kickstart your future towards saving money in the long-run. And it is crucial for you to take action in controlling your current finance, as the current rate suggests that you are losing money.", 
    },
    { category: 'low', condition: (savingsPercentage > 0 && savingsPercentage <= 10), message: "Overall, you're saving a minimal amount of your income. Although your total net savings is above or close to the positive threshold, the goal is to provide yourself with financial security in the long-term future. Consider some of the suggested actions above to re-evaluate methods of improving your future financial security.", 
    },
    { category: 'better',condition: (savingsPercentage > 10 && savingsPercentage <= 15), message: "Overall, you're saving a modest amount of your income. Your savings is still below or close to the suggested threshold. Review any of the suggested actions above to re-evaluate methods of improving your future financial security.",
    },
    { category: 'good',condition: (savingsPercentage > 15 && savingsPercentage <= 25), message: "Overall, you're right at where you should be in terms of your overall spending and lifestyle. But that isn't to say you are guaranteed to be smooth sailing from here on forward. Remember to aware and evaluate changes to your financial contributions as well as consider changing strategies to plan for any potential large future investments.", 
    },
    { category: 'high', condition: (savingsPercentage > 25 && savingsPercentage < 35), message: "Overall, your savings are above average, which is a positive sign for your long-term financial security. You have room to allocate more income towards personal spending while maintaining a healthy savings rate. This can provide you with the flexibility to enjoy life a bit more while still securing your financial future. Consider revisiting your budget to identify areas where you can comfortably increase personal spending without compromising your savings goals.", 
    },
    { category: 'vHigh',condition: (savingsPercentage > 35 && savingsPercentage <= 50),  message: "Overall, you're saving a substantial portion of your income that is much more than the recommended percentage. At this rate you will be able to provide yourself with future long-term financial security, especially for some of the heavier investments such as; buying a home, raising kids, college funds, retirement. Realize that suffocating any efforts to utilize your spending will also impact your quality of life, so don't be afraid to treat yourself a little more.", 
    },
    { category: 'ultraHigh', condition: (savingsPercentage > 50), message: "Overall, you're saving money far more than the suggested amount. Although saving money is an important aspect of healthy financial management and security, be mindful that completely depriving yourself the ability to utilize your spending for personal use is not a healthy nor sustainable practice. Know that with your current personal finance status, you have much more security than you may believe so enjoy the things that you love to do the most. So live a little <3.",  
    },
];

function financeCombinations() {
    const combinations = [];

    for (const income of incomeBracket) {
        for (const need of needBracket) {
            for (const personal of personalBracket) {
                for (const savings of savingsBracket) {
                    const condition = income.condition && need.condition && personal.condition && savings.condition;
                    combinations.push({ income, need, personal, savings, condition });
                }
            }
        }
    }

    return combinations;
}
// //Low Income Bracket.. jk there are a total of 728 unique combinations. we may need to group together. 
// const worstCase = (incomeBracket[0].condition && needBracket[4].condition && personalBracket[4].condition && savingsBracket[0].condition);
// const worstCase = (incomeBracket[0].condition && needBracket[4].condition && personalBracket[3] || personalBracket[4] && savingsBracket[0].condition);
// const worstCase = (incomeBracket[0].condition && needBracket[4].condition && personalBracket[3] || personalBracket[4] && savingsBracket[0].condition);

FinanceButton.addEventListener("click", ()=> {
    const combinations = financeCombinations();
    // let Meme ='';
    // let financeDescription;

    for (const combination of combinations) {
        if (combination.condition) {
            // Display the message corresponding to the combination
            popFinanceDescription.textContent = combination.income.message + combination.need.message + combination.personal.message + combination.savings.message;
            break; // Exit the loop after the first valid combination is found
        }
    }
});

    if (combinations) {
        // Meme = "https://media0.giphy.com/media/gKfyusl0PRPdTNmwnD/giphy.gif?cid=ecf05e47olecwa440sa3f240dn2ly04sdy5z9aaqpyf9xd0e&ep=v1_gifs_search&rid=giphy.gif&ct=g";
        financeDescription = "";}
    // } else if ()

//     RevealMemeImage.src = Meme;
//     popFinanceDescription.textContent = financeDescription;


// let desperationMeme=(lowIncome && savingsPercentage <=0 || personalPercentage > 35 && personalPercentage <= 45 || needPercentage > 45 && needPercentage <= 65);
// let badSpendingMeme=(savingsPercentage > 0 && savingsPercentage <=15 || personalPercentage >= 40 || needPercentage )




// FinanceButton.addEventListener("click", ()=> {
//     let Meme ='';
//     let MemeDescription;

//     if (desperationMeme) {
//         Meme = "https://media0.giphy.com/media/gKfyusl0PRPdTNmwnD/giphy.gif?cid=ecf05e47olecwa440sa3f240dn2ly04sdy5z9aaqpyf9xd0e&ep=v1_gifs_search&rid=giphy.gif&ct=g";
//         MemeDescription = "";}
//     // } else if ()

//     RevealMemeImage.src = Meme;
//     popMemeDescription.textContent = MemeDescription;
// });






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