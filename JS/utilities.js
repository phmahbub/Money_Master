//find any input value
function fieldValue(fieldId){
    const fieldElement = document.getElementById(fieldId)
    const fieldString = fieldElement.value
    const fieldValue = parseFloat(fieldString)
    // fieldElement.value = ''
    return fieldValue
}
//find inner text value
function fieldText(fieldId){
    const fieldElement = document.getElementById(fieldId)
    const fieldString = fieldElement.innerText
    const fieldValue = parseFloat(fieldString)
    return fieldValue
}
//set new value in a field(replace inner text)
function setNewValue(id, newValue){
    const displayElement = document.getElementById(id)
    displayElement.innerText = newValue
}
//total expense calculation
function totalExpense(){
    const income = fieldValue('income-field')
    const foodExpense = fieldValue('food-expense')
    const rentExpense = fieldValue('rent-expense')
    const clothExpense = fieldValue('cloth-expense')
    const totalField = fieldText('total-expense')   
    const totalExpense = foodExpense+rentExpense+clothExpense
    return totalExpense 
}
//balance calculation
function balance(){
    const income = fieldValue('income-field')
    const finalExpense = totalExpense()
    const balance = income - finalExpense
    return balance
}
//clear any  filed
function toClearField(fieldId){
    const fieldString = document.getElementById(fieldId)
    fieldString.value = ''
}