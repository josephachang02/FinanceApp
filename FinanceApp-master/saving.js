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
let incomeTextVisible = false;
const incomeButton = document.getElementById('revealIncome');
const IncomePTag = document.getElementById('incomeResult');
let necessitiesTextVisible = false;
const necessitiesButton = document.getElementById('revealNecessities'); 
const NecessitiesPTag = document.getElementById('necessitiesResult');
let personalTextVisible = false;
const personalButton = document.getElementById('revealPersonal');
const PersonalPTag = document.getElementById('personalResult');
let savingsTextVisible = false;
const savingsButton = document.getElementById('revealSavings');
const SavingsPTag = document.getElementById('savingsResult');
let financeButtonVisible = false;
const FinanceButton = document.getElementById('revealFinanceBtn');
const MemeImage = document.getElementById('MemeImage');
const popMemeDescription = document.getElementById('MemeDescription');
// const revealFinanceBtn = document.getElementById('revealFinanceBtn');
const popFinanceDescription = document.getElementById('financeDescription');



const incomeDisplay = document.getElementById('incomeDisplay');
// Display the income in the <p> element
incomeDisplay.textContent = `Calculated Monthly Income: $${income}, Calculated Monthly Need Expenses: $${expenses}, Calculated Monthly Personal Expenses: $${personal}`;



//Retrieving the value of the total saved which will be the difference of the income and the (spendings/necesities) combined
const spentTotal = expenses + personal;
const savedTotal = income - spentTotal;

// Percentage of the Amount divided by the total income
const needPercentage = (expenses / income) * 100; 
const personalPercentage = (personal / income) * 100;
const savingsPercentage = (savedTotal / income) * 100;

//Personal spendings console.log brackets for when the amount is either or differences. 
const needsResult = needPercentage;
const personalResult = personalPercentage;
const savingsResult = savingsPercentage;

//Income brackets. 




incomeButton.addEventListener('click', () => {
    incomeTextVisible = !incomeTextVisible;
    if (incomeTextVisible) {
        let incomeText;
    if (lowIncome) {
        incomeText = "Although your generated monthly income puts you in the low-income tier, that shouldn't discourage you from your ability to build up savings slowly overtime. However, based on your generated income no matter how much you cut on spending, this will hinder your ability to make flexible financial changes or large purchases in the future. If you are not already in the process of working towards or changing career path, consider your options for optimizing an opportunity towards a career that interests you that can simultaneously improve your earnings.";
    } else if (lowMidIncome) { 
        incomeText = "Your income falls within the lower mid-range. While you may not be in the highest earning bracket, you have room for improvement and the potential to increase your financial stability. Focus on responsible financial management and look for opportunities to boost your income or savings to work towards your financial goals.";
    } else if (highMidIncome) {
        incomeText = "Your income is in the higher mid-range. You are in a position to capitalize on your earning potential, and with smart financial management, you can make meaningful strides toward your financial goals. Consider optimizing your financial strategies and saving wisely to secure your financial future.";
    } else if (highIncome) {
        incomeText = "You're monthly income puts you in a secure and sustainable financial position. This will allow you to save money at a higher and faster rate, which can make the process of long-term or larger purchases smoother. Nonetheless, your income alone does not protect you against poor spending management. Take advantage of your overall earnings to provide yourself with a sustainable lifestyle that contributes towards a net-positive savings.";
    }
    IncomePTag.textContent = incomeText;
    IncomePTag.style.display = 'block';
} else {
    IncomePTag.style.display = 'none';
}
});

//event listener for the buttons, once clicked they will populate the specific text parameters that fit the given variable 


necessitiesButton.addEventListener('click', ()=>{
 necessitiesTextVisible = !necessitiesTextVisible;
 if (necessitiesTextVisible) {
 let finalText;
    if (needPercentage > 0 && needPercentage <= 30) {
        finalText = "You are in a good financial position where your allocated necessities are not hindering your overall income. Take advantage of your situation and utilize those benefits to reap greater earnings for future savings. With less expenses to be mindful of, you have more flexibility to utilize your earnings towards personal expenses and savings. But be mindful of any potential changes in this category, as it will directly affect your overall financial flexibility. ";
    } else if (needPercentage > 30 && needPercentage <= 45) {
        finalText = "Your allocation of necessities is in a healthy range. You are maintaining a balance between meeting essential needs and having some financial flexibility. This provides you with the opportunity to save and invest in your personal well-being. To continue on this positive path, consider looking for opportunities to optimize your spending and increase your savings.";
    } else if (needPercentage > 45 && needPercentage <= 55) {
        finalText = "Your necessary spending falls within the typical range. You are allocating a significant portion of your income to essentials, and it's important to maintain this balance. Be mindful of any changes that may affect your necessity spending, as it can impact your overall financial situation. Consider reviewing your expenses regularly to identify areas where you can make small adjustments to improve your financial health.";
    } else if (needPercentage > 55 && needPercentage <= 65) {
        finalText = "Your necessity spending exceeds the typical range for essentials. This can put pressure on your overall financial health and flexibility. It's essential to address this situation by identifying areas where you can cut exceeding costs. Consider exploring options such as moving to a more affordable housing unit, creating a detailed grocery list and adhering to it to manage grocery expenses better, or changing your transportation method to reduce commuting costs. These changes can significantly enhance your financial situation and provide you with more financial freedom and earn you larger savings.";
    } else if (needPercentage > 65) {
        finalText = "Your accumulated necessary spending is exceptionally high. Because a large majority of the categories comprise of costly goods, and necessities are also the most expensive, it's important to address this situation as it can significantly impact your overall financial health and flexibility to utilize your personal spendings/savings. Go back to this section and re-evaluate which categories can be improved. Consider options such as; move to a housing unit that suits your income (30% of income for housing), creating a grocery list and sticking to it, or changing forms of transportation. As they can drastically improve your overall financial health and flexibility. ";
    }
    NecessitiesPTag.textContent = finalText;
    NecessitiesPTag.style.display = 'block';
} else {
    NecessitiesPTag.style.display = 'none';
}
});

personalButton.addEventListener('click', ()=>{
    personalTextVisible = !personalTextVisible;
    if (personalTextVisible) {

    let personalText;
    if (personalPercentage > 0 && personalPercentage <= 15) {
        personalText = "Your personal spending rate is very low, and this can mean different things for various people such as; inability to expend on personal uses due to exceeding pressure from your necessities, frugal/strong discipline with personal spendings. That being said, you're spending less than 15% of your own income on yourself. If your budget grants you the ability to make those purchases, you should allocate spending towards activities/purchases that can improve your quality of life and well-being.";
    } else if (personalPercentage > 15 && personalPercentage <= 25) {
        personalText = "Your personal spending habits are in a healthy and reasonable range. Your reports indicate that you maintain good control over your own discretionary expenses. Although your personal spendings are in a healthy and reasonable range, you should also consider the other factors that contribute to your overall financial performance. Nonetheless, continue to practice smart and financial spendings that will help to optimize your financial health.";
    } else if (personalPercentage > 25 && personalPercentage <= 35) {
        personalText = "Your personal spending is fairly balanced. You're neither overspending nor underspending in this category. However, this balance provides an opportunity for you to further fine-tune your spending habits. Consider looking back at the page as a reference for creating a detailed budget to track and manage your personal expenses more efficiently. This will help you make informed decisions and allocate resources more effectively.";
    } else if (personalPercentage > 35 && personalPercentage <= 45) {
        personalText = "Your personal spending is on the higher side. While it's essential to enjoy personal expenses, it's also important to ensure that your spending aligns with your financial goals/circumstances. Consider reviewing your discretionary spending and identifying areas where you can make adjustments without significantly sacrificing your quality of life. Small changes in personal spending can lead to significant savings over time as well as build financial discipline.";
    } else if (personalPercentage > 45) {
        personalText = "Your current personal spending habits can quickly deplete your finances. To improve your financial situation, identify the areas that largely contribute to your personal spending and create a plan towards cutting out those expenses. Know that a lot of these changes will affect your current lifestyle quite drastically, and it is difficult to accept those changes, but this will lead you in the direction of making future long-term purchases/investments with a solid financial foundation.";
    }
    PersonalPTag.textContent = personalText;
    PersonalPTag.style.display = 'block';
    } else {
        PersonalPTag.style.display = 'none';
    }
});

//Personal Spending Messaging Console. 30 is even 
savingsButton.addEventListener('click', ()=>{
    financeButtonVisible = !financeButtonVisible
    if (financeButtonVisible) {
    let savingsText; 
    if (savingsPercentage <= 0) {
        savingsText = "Overall, your total spending exceeds your earnings on a monthly basis. Regardless of your own personal lifestyle or income, it would be crucial to take action with some of the suggestions above. Know that there will be significant lifestyle changes, but this is to kickstart your future towards saving money in the long-run. And it is crucial for you to take action in controlling your current finance, as the current rate suggests that you are losing money.";
    } else if(savingsPercentage > 0 && savingsPercentage <= 10) {
        savingsText = "Overall, you're saving a minimal amount of your income. Although your total net savings is above or close to the positive threshold, the goal is to provide yourself with financial security in the long-term future. Consider some of the suggested actions above to re-evaluate methods of improving your future financial security.";
    } else if (savingsPercentage > 10 && savingsPercentage <= 15) {
        savingsText = "Overall, you're saving a modest amount of your income. Your savings is still below or close to the suggested threshold. Review any of the suggested actions above to re-evaluate methods of improving your future financial security.";
    } else if (savingsPercentage > 15 && savingsPercentage <= 25) {
        savingsText = "Overall, you're right at where you should be in terms of your overall spending and lifestyle. But that isn't to say you are guaranteed to be smooth sailing from here on forward. Remember to aware and evaluate changes to your financial contributions as well as consider changing strategies to plan for any potential large future investments.";
    } else if (savingsPercentage > 25 && savingsPercentage <= 35) {
        savingsText = "Overall, your savings are above average, which is a positive sign for your long-term financial security. You have room to allocate more income towards personal spending while maintaining a healthy savings rate. This can provide you with the flexibility to enjoy life a bit more while still securing your financial future. Consider revisiting your budget to identify areas where you can comfortably increase personal spending without compromising your savings goals.";
    } else if (savingsPercentage > 35 && savingsPercentage <= 50) {
        savingsText = "Overall, you're saving a substantial portion of your income that is much more than the recommended percentage. At this rate you will be able to provide yourself with future long-term financial security, especially for some of the heavier investments such as; buying a home, raising kids, college funds, retirement. Realize that suffocating any efforts to utilize your spending will also impact your quality of life, so don't be afraid to treat yourself a little more.";
    } else if (savingsPercentage > 50) {
        savingsText = "Overall, you're saving money far more than the suggested amount. Although saving money is an important aspect of healthy financial management and security, be mindful that completely depriving yourself the ability to utilize your spending for personal use is not a healthy nor sustainable practice. Know that with your current personal finance status, you have much more security than you may believe so enjoy the things that you love to do the most. So live a little <3.";
    }

    SavingsPTag.textContent = savingsText;
    SavingsPTag.style.display = 'block';
 } else { 
    SavingsPTag.style.display = 'none';
 }
});



///parameters for the memes
//Income Parameter
const lowIncome = (income > 0 && income <= 2083); //25,000
const lowMidIncome = (income > 2083 && income <= 4166); //25,000 and 50,000
const highMidIncome = (income > 4166 && income <= 8333); //50,000 and 100,000
const highIncome = (income > 8333); //>100,000

//Savings Parameter 
const noSavings = (savingsPercentage <= 0);
const midSavings = (savingsPercentage > 0 && savingsPercentage <=20);
const highSavings = (savingsPercentage > 20);

// low income meme
let LowIncomeTight = (lowIncome || noSavings || personalPercentage <= 40 || needPercentage <= 60);
let LowIncomeHighSpender = (lowIncome || noSavings || personalPercentage >= 40); 
let LowIncomeHighN = (lowIncome || noSavings || needPercentage >= 60); 

//low income savings mid save
let LowIncomeMidSavingsTight = (lowIncome || midSavings || personalPercentage <= 40 || needPercentage <= 60); 
let LowIncomeHighSpenderMidSavings = (lowIncome || midSavings || personalPercentage >= 40); 
let LowIncomeHighNMidSavings = (lowIncome || midSavings || needPercentage >= 60); 

//low income savings high
let LowIncomeHighSpenderHighSavings = (lowIncome || highSavings || personalPercentage >= 30);
let LowIncomeHighNHighSavings = (lowIncome || highSavings || needPercentage >= 50);
let LowIncomeHighSavingsTight = (lowIncome || highSavings || personalPercentage <= 40 || needPercentage <= 60);



// low mid income extremeties 
let MidLowIncomeTight = (lowMidIncome || noSavings || personalPercentage <= 40 || needPercentage <= 60);
let MidLowIncomeHighSpender = (lowMidIncome || noSavings || personalPercentage >= 40); 
let MidLowIncomeHighN = (lowMidIncome || noSavings || needPercentage >= 60); 

//lowmid income savings mid save
let MidLowIncomeMidSavingsTight = (lowMidIncome || midSavings || personalPercentage <= 40 || needPercentage <= 60); 
let MidLowIncomeHighSpenderMidSavings = (lowMidIncome || midSavings || personalPercentage >= 40); 
let MidLowIncomeHighNMidSavings = (lowMidIncome || midSavings || needPercentage >= 60); 

//lowmid income savings high
let MidLowIncomeHighSpenderHighSavings = (lowMidIncome || highSavings || personalPercentage >= 40);
let MidLowIncomeHighNHighSavings = (lowMidIncome || highSavings || needPercentage >= 60);
let MidLowIncomeHighSavingsTight = (lowMidIncome || highSavings || personalPercentage <= 40 || needPercentage <= 60);


//high mid income meme
// high mid income extremeties 
let HighMidIncomeTight = (highMidIncome || noSavings || personalPercentage <= 40 || needPercentage <= 60);
let HighMidIncomeHighSpender = (highMidIncome || noSavings || personalPercentage >= 40); 
let HighMidIncomeHighN = (highMidIncome || noSavings || needPercentage >= 60); 

//high mid income savings mid save
let HighMidIncomeMidSavingsTight = (highMidIncome || midSavings || personalPercentage <= 40 || needPercentage <= 60); 
let HighMidIncomeHighSpenderMidSavings = (highMidIncome || midSavings || personalPercentage >= 40); 
let HighMidIncomeHighNMidSavings = (highMidIncome || midSavings || needPercentage >= 60); 

//high mid income savings high
let HighMidIncomeHighSpenderHighSavings = (highMidIncome || highSavings || personalPercentage >= 40);
let HighMidIncomeHighNHighSavings = (highMidIncome || highSavings || needPercentage >= 60);
let HighMidIncomeHighSavingsTight = (highMidIncome || highSavings || personalPercentage <= 40 || needPercentage <= 60);



//high income meme
let HighIncomeTight = (highIncome || noSavings || personalPercentage <= 40 || needPercentage <= 60);
let HighIncomeHighSpender = (highIncome || noSavings || personalPercentage >= 40); 
let HighIncomeHighN = (highIncome || noSavings || needPercentage >= 60); 

//high income savings mid save
let HighIncomeMidSavingsTight = (highIncome || midSavings || personalPercentage <= 40 || needPercentage <= 50); 
let HighIncomeHighSpenderMidSavings = (highIncome || midSavings || personalPercentage >= 30); 
let HighIncomeHighNMidSavings = (highIncome || midSavings || needPercentage >= 50); 

//high income savings high
let HighIncomeHighSpenderHighSavings = (highIncome || highSavings || personalPercentage >= 30);
let HighIncomeHighNHighSavings = (highIncome || highSavings || needPercentage >= 50);
let HighIncomeHighSavingsTight = (highIncome || highSavings || personalPercentage <= 40 || needPercentage <= 60);


// Low Low Mid Income Meme
const NoSavingsLowIncomeTight = (LowIncomeTight || MidLowIncomeTight);
const SpenderNNoLowSaving = (LowIncomeHighSpender || LowIncomeHighN || LowIncomeHighSpenderMidSavings || LowIncomeHighNMidSavings || MidLowIncomeHighSpender || MidLowIncomeHighN || MidLowIncomeHighSpenderMidSavings || MidLowIncomeHighNMidSavings)
const HighSavingsLowIncomeTight = (MidLowIncomeHighSavingsTight || LowIncomeHighSavingsTight);
const SpenderNHighSaving = (LowIncomeHighNHighSavings || LowIncomeHighSpenderHighSavings || MidLowIncomeHighNHighSavings || MidLowIncomeHighSpenderHighSavings);
const TightMidSavingLowIncome = (MidLowIncomeMidSavingsTight || LowIncomeMidSavingsTight);

//High Mid High Income Meme 
const NoSavingsHighIncomeTight = (HighMidIncomeTight || HighIncomeTight);
const SpenderNNoLowSavingsHigh = (HighMidIncomeHighSpender || HighMidIncomeHighN || HighMidIncomeHighSpenderMidSavings || HighMidIncomeHighNMidSavings || HighIncomeHighSpender || HighIncomeHighN || HighIncomeHighSpenderMidSavings || HighIncomeHighNMidSavings); 
const HighSavingsHighIncomeTight = (HighMidIncomeHighSavingsTight || HighIncomeHighSavingsTight);
const TightMidSavingHighIncome = (HighMidIncomeMidSavingsTight || HighIncomeMidSavingsTight);
const HighIncomeSpenderNHighSavings = (HighMidIncomeHighNHighSavings || HighMidIncomeHighSpenderHighSavings || HighIncomeHighNHighSavings || HighIncomeHighSpenderHighSavings );

const myImage = document.getElementById("myImage");

// Set the new src attribute value
myImage.src = "./IMG_5563.PNG";

FinanceButton.addEventListener("click", ()=> {
    let Meme ='';

    if (NoSavingsLowIncomeTight) {
        Meme = "https://media0.giphy.com/media/gKfyusl0PRPdTNmwnD/giphy.gif?cid=ecf05e47olecwa440sa3f240dn2ly04sdy5z9aaqpyf9xd0e&ep=v1_gifs_search&rid=giphy.gif&ct=g";
    } else if (SpenderNNoLowSaving) {
        Meme = "https://i.imgflip.com/22zhdm.jpg";
    } else if (HighSavingsLowIncomeTight) {
        Meme = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXU5cWlycXI4eXZ1emg2bms5MmlhbTVnNmR0MnlxcWVkOHp0OGNhbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UG1158LKezOTMHoIEj/giphy.gif";
    } else if (SpenderNHighSaving) {
        Meme = "https://media1.giphy.com/media/SUEjfSLaD6f77lyzH6/giphy.gif?cid=ecf05e47cmq090wvqgin4u8yf4y43j91b7giqjx6vuc5eiro&ep=v1_gifs_search&rid=giphy.gif&ct=g";
    } else if (TightMidSavingLowIncome) {
        Meme = "https://media0.giphy.com/media/iJJ6E58EttmFqgLo96/giphy.gif?cid=ecf05e47ipnohhuvjupq2e3zu66axnwsmniwf8aox9jk3078&ep=v1_gifs_search&rid=giphy.gif&ct=g";
    } else if (NoSavingsHighIncomeTight) {
        Meme = "https://media1.giphy.com/media/l3vQZ8ko4l0nvjm2Q/giphy.gif?cid=ecf05e47se3v7lx3b5klrpl634b8o8ytn60lqi7o8pcoc1hx&ep=v1_gifs_search&rid=giphy.gif&ct=g";
    } else if (SpenderNNoLowSavingsHigh) {
        Meme = "https://media1.giphy.com/media/3ohfFEF8t4y30J86DC/giphy.gif?cid=ecf05e470ol4edqis826ma6jth6zus4h4a88gwferefkyiks&ep=v1_gifs_search&rid=giphy.gif&ct=g";
    // } else if (HighSavingsHighIncomeTight) {
    //     Meme = myImage.src;
    } else if (TightMidSavingHighIncome) {
        Meme = "https://media2.giphy.com/media/3oKIPm3BynUpUysTHW/giphy.gif?cid=ecf05e47t1323y17j8m7w123psaw56lp5ii0oyqllkjwmvgm&ep=v1_gifs_search&rid=giphy.gif&ct=g";
    } else if (HighIncomeSpenderNHighSavings) {
        Meme = "https://media.tenor.com/kiEbqAowVo0AAAAC/credit-card-smacking-credit-card-on-table.gif";
    };


    MemeImage.src = Meme;
//     popMemeDescription.textContent = MemeDescription;
});