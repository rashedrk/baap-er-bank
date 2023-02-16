// step 1 : add event handler to deposit button 
document.getElementById('btn-deposit').addEventListener('click',function () {
    // step 2 : get deposit amount from the deposit input field 
    const depositInput = document.getElementById('deposit-field');
    const newDepositAmountString = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    // step 3 : get the current total deposit 
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step 4 : add number to set total deposit 
    const currentDepositTotal = previousDepositTotal + newDepositAmount ;
    // set deposit total 
    depositTotalElement.innerText = currentDepositTotal ;

    // step 5 : get balance current total 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step 6 : calculate current total balance 
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set current total balance 
    balanceTotalElement.innerText = currentBalanceTotal;
    
    // step 7: clear deposit input field 
    depositInput.value = '';
})