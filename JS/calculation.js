
//calculate button click
document.getElementById('btn-calculate').addEventListener('click', function(){
    const finalExpense = totalExpense()
    const newBalance = balance()
    // console.log(totalExpense)
    if(isNaN(finalExpense)){
        alert('Please enter valild number in all field')
        return
    }
    else{
        if (newBalance<0) {
            alert('Your expense is more than income. Please reduce expense')
            return
        } 
        else {
        setNewValue('total-expense', finalExpense.toFixed(2))
        setNewValue('total-balance', newBalance.toFixed(2))
        document.getElementById('savings-amount').value = newBalance
        }
    } 
})

//save button click
document.getElementById('btn-save').addEventListener('click', function(){
    const savingsAmountField = fieldValue('savings-amount')
    const savingsRate = fieldValue('percentage')
    const savingsAmount = savingsAmountField*(savingsRate/100)
    if(isNaN(savingsRate) || isNaN(savingsAmountField)){
        alert('Please enter a valid data!!')
        return 
    }
    else{
        if(savingsRate>=100){
            alert('You cant save your total or more than your balance balance')
            return
        }
        else{
            setNewValue('final-savings', savingsAmount.toFixed(2))
            const remianingBalance = balance() - savingsAmount
            setNewValue('remaining-balance', remianingBalance.toFixed(2))
            //clear all the field
            toClearField('income-field')
            toClearField('food-expense')
            toClearField('rent-expense')
            toClearField('cloth-expense')
            toClearField('savings-amount')
            toClearField('percentage')
        }
    }
})