console.log('Home Page Added');
document.getElementById('btn-add-money').addEventListener('click',function(event){
  event.preventDefault(); //it is for preventing the page reload
 const addMoneyInput = document.getElementById('input-add-money').value
 console.log(addMoneyInput); 

 const pinNumberInput = document.getElementById('input-pin-number').value
 console.log(pinNumberInput);
 if(pinNumberInput === '2580'){
  console.log('Adding Money to your account');
const balance = document.getElementById('account-balance').innerText;
 console.log(balance);

 const addMoneyNumber = parseFloat(addMoneyInput);
 const balanceNumber = parseFloat(balance);
 const newBalance = addMoneyNumber + balanceNumber
document.getElementById('account-balance').innerText = newBalance;
 console.log(newBalance);
 }
 else{
  alert('Failed to add money!Please try again')
 }
});