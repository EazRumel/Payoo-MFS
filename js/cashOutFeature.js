console.log('Features File Added');
document.getElementById('btn-show-cash-out').addEventListener('click', function(){
  console.log('Cash Out Button has been clicked')
  document.getElementById('cash-out-form').classList.remove('hidden')
  document.getElementById('add-money-form').classList.add('hidden')
})
document.getElementById('btn-show-add-money').addEventListener('click',function(){
  console.log('Add Money Button has been added')
  document.getElementById('add-money-form').classList.remove('hidden')
  document.getElementById('cash-out-form').classList.add('hidden')
})