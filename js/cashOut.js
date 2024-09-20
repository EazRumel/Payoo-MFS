document.getElementById('btn-cash-out').addEventListener('click', function(value){
  console.log('Cash out button added')
  value.preventDefault()
  const cashOut = document.getElementById('input-cash-out').value
  const cashOutNumber = parseFloat(cashOut);
  const pinNumber = document.getElementById('input-cash-out-pin').value
  console.log(pinNumber)
  console.log(cashOut)
  if(pinNumber === '2580'){
    const balance = document.getElementById('account-balance').innerText
    const balanceNumber = parseFloat(balance)
    const newBalance = balanceNumber - cashOutNumber
  document.getElementById('account-balance').innerText = newBalance
  }
  else{
    alert('Failed to cash out!')
  }
})

