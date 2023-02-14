
document.getElementById('btn-deposit').addEventListener('click', function () {

    const depositField = document.getElementById('deposit-field');
    const depositFieldAmountString = depositField.value;
    const depositFieldAmount = parseFloat(depositFieldAmountString);

    depositField.value = '';

    const oldDepositAmount = document.getElementById('deposit-total');
    const oldDepositAmountString = oldDepositAmount.innerText;
    const newDepositAmount = parseFloat(oldDepositAmountString);

    const updateDepositAmount = newDepositAmount + depositFieldAmount;

    oldDepositAmount.innerText = updateDepositAmount;


    const oldBalanceAmount = document.getElementById('balance-total');
    const oldBalanceAmountString = oldBalanceAmount.innerText;
    const newBalanceAmount = parseFloat(oldBalanceAmountString);

    const updateBalanceAmount = newBalanceAmount + updateDepositAmount;
    oldBalanceAmount.innerText = updateBalanceAmount;
})