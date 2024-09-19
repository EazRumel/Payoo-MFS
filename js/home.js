console.log('Home Page Added');
document.getElementById('btn-add-money').addEventListener('click',function(event){
  event.preventDefault(); //it is for preventing the page reload
 const addMoneyInput = document.getElementById('input-add-money').value
 console.log(addMoneyInput); 

 const pinNumberInput = document.getElementById('input-pin-number').value
 console.log(pinNumberInput);
})