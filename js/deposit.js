/*
1. Add event listener to the deposit button. 
2. Get deposit amount from the deposit input field.
2-5. Make Sure Convert String Deposit Amount To a Number Type.
3. Clear the deposit input field after getting the value.
4. Get the previous deposit total.
5. Calculate New Deposit total and set the value to the deposit total.

*/


// step-1
document.getElementById('btn-deposit').addEventListener('click', function () {

    // step-2
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // step-3:
    depositField.value = '';

    // Step-4
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step-5
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;


})