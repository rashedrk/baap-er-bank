/* 
1. Add event handler with the withdraw button
2. Get the withdraw amount from the withdraw field 
    also convert input into number using parsefloat
3. Get previous withdraw total
4. Calculate total withdraw amount
    set total withdraw amount
5. Get the previous balance total
6. Calculate new balance total
    set the new balance total
7. clear the withdraw input field
*/

// step 1
document.getElementById('btn-withdraw').addEventListener('click',function () {
    // step 2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step 3 
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // step 4 
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step 5 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step 6 
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    // step 7 
    withdrawField.value = '';
})