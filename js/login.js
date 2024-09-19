
 document.getElementById('button-login').addEventListener('click',function(event){
  event.preventDefault();
  console.log('login clicked');
  const phoneNumber = document.getElementById('phone-number').value;
  
  const pinNumber = document.getElementById('pin-number').value;
  console.log(phoneNumber,pinNumber);

  if(phoneNumber === '01329434459' && pinNumber === '2580'){
    console.log('You are logged in');
    window.location.href = 'home.html'
  }
  else{
    alert('Check Your pin or phoner number if its correct')
  }
});
 
