

// let phones = document.querySelector('#phone');
// phones.textContent += '(el)';
// console.log(phones.nodeName);
// console.log(phones.nodeType);

// const addForm = document.forms['form'];


// addForm.addEventListener('submit', function(e){
//     e.preventDefault();
//     const values = addForm.querySelector
//     ('input[type="tel"]').value;
    
//     console.log(values);
   
// });








// function carrier(){
//     const disp = document.getElementById('display');
//     const input = document.getElementById('phonenumber'); 
//     disp.innerText = input.value;
// }

// btn1.addEventListener('click', carrier, function(e){
//     e.preventDefault()
// })



// input=parseInt(myform.fst.value);

const btn1 = document.getElementById('btn');

btn1.addEventListener('click', function(e){
    e.preventDefault()

    const output = document.getElementById('carriertype');
    // const disp = document.getElementById('display');
    const input = document.getElementById('phonenumber');
    let error = document.getElementById('error');

   if (input.value[0] === '6' && input.value[1] === '5' && input.value[2] === '4' ){
    form.carriertype.value = 'MTN';
  }
  else if(input.value[0] === '6' && input.value[1] === '5' && input.value[2] === '1') {
    form.carriertype.value = 'MTN';
  }
  else if(input.value[0] === '6' && input.value[1] === '5' && input.value[2] === '2') {
    form.carriertype.value = 'MTN';
  }
  else if(input.value[0] === '6' && input.value[1] === '5' && input.value[2] === '0') {
    form.carriertype.value = 'MTN';
  }
  else if(input.value[0] === '6' && input.value[1] === '5' && input.value[2] === '3'){
    form.carriertype.value = 'MTN';
  }
  else if(input.value[0] === '6' && input.value[1] === '7'){
    form.carriertype.value = 'MTN';
  }
  else if(input.value[0] === '6' && input.value[1] === '8'){
    form.carriertype.value = 'MTN';
  }



//orange


  else if(input.value[0] === '6' && input.value[1] === '5' && input.value[2] === '5'){
    form.carriertype.value = 'ORANGE';
  }
  else if(input.value[0] === '6' && input.value[1] === '5' && input.value[2] === '6'){
    form.carriertype.value ='ORANGE';
  }
  else if(input.value[0] === '6' && input.value[1] === '5' && input.value[2] === '7'){
    form.carriertype.value = 'ORANGE';
  }
  else if(input.value[0] === '6' && input.value[1] === '5' && input.value[2] === '8'){
    form.carriertype.value = 'ORANGE';
  }
  else if(input.value[0] === '6' && input.value[1] === '5' && input.value[2] === '9'){
    form.carriertype.value = 'ORANGE';
  }
  else if(input.value[0] === '6' && input.value[1] === '9'){
    form.carriertype.value = 'ORANGE';
  }

  //camtel

  else if(input.value[0] === '6' && input.value[1] === '2'){
    form.carriertype.value = 'CAMTEL';
  }

  //nexttel
  else if(input.value[0] === '6' && input.value[1] === '6'){
    form.carriertype.value = 'NEXTTEL';
  }
  else if(input.length < 9){
    form.carriertype.value = 'Please Enter a valid number';
  }
  else {
    error.innerHTML = 'Please Enter a valid number';
  }
})