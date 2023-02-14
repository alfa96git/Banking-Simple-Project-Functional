
document.getElementById('btn-withdraw').addEventListener('click', function(){

    const withdrawFieldAmount = document.getElementById('withdraw-field');
    const withdrawFieldAmountString = withdrawFieldAmount.value;
    const newWithdrawFieldAmount = parseFloat(withdrawFieldAmountString);

    withdrawFieldAmount.value = '';

    const oldWithdrawAmount = document.getElementById('withdraw-total');
    const oldWithdrawAmountString = oldWithdrawAmount.innerText;
    const updateWithdrawAmount = parseFloat(oldWithdrawAmountString);
    
    const withdrawAmountTotal = updateWithdrawAmount + newWithdrawFieldAmount;

    oldWithdrawAmount.innerText = withdrawAmountTotal; 


    const oldBalanceAmount = document.getElementById('balance-total');
    const oldBalanceAmountString = oldBalanceAmount.innerText;
    const updateBalanceAmount = parseFloat(oldBalanceAmountString);

    const updateBalanceTotal = updateBalanceAmount - withdrawAmountTotal;
    
    oldBalanceAmount.innerText = updateBalanceTotal;


})