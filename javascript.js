
const btn1 = document.getElementById('btn');

btn1.addEventListener('click', function(e){
    e.preventDefault()

    const output = document.getElementById('inp2');
    // const disp = document.getElementById('display');
    const input = document.getElementById('phonenumber');

   if (input.value[0] === '6' && input.value[1] === '5' && input.value[2] === '4' ){
    inp2.value = 'MTN';
  }
  else if(input.value[0] === '6' && input.value[1] === '5' && input.value[2] === '1') {
    inp2.value = 'MTN';
  }
  else if(input.value[0] === '6' && input.value[1] === '5' && input.value[2] === '2') {
    inp2.value = 'MTN';
  }
  else if(input.value[0] === '6' && input.value[1] === '5' && input.value[2] === '0') {
    inp2.value = 'MTN';
  }
  else if(input.value[0] === '6' && input.value[1] === '5' && input.value[2] === '3'){
    inp2.value = 'MTN';
  }
  else if(input.value[0] === '6' && input.value[1] === '7'){
    inp2.value = 'MTN';
  }
  else if(input.value[0] === '6' && input.value[1] === '8'){
    inp2.value = 'MTN';
  }



//orange


  else if(input.value[0] === '6' && input.value[1] === '5' && input.value[2] === '5'){
    inp2.value = 'ORANGE';
  }
  else if(input.value[0] === '6' && input.value[1] === '5' && input.value[2] === '6'){
    inp2.value ='ORANGE';
  }
  else if(input.value[0] === '6' && input.value[1] === '5' && input.value[2] === '7'){
    inp2.value = 'ORANGE';
  }
  else if(input.value[0] === '6' && input.value[1] === '5' && input.value[2] === '8'){
    inp2.value = 'ORANGE';
  }
  else if(input.value[0] === '6' && input.value[1] === '5' && input.value[2] === '9'){
    inp2.value = 'ORANGE';
  }
  else if(input.value[0] === '6' && input.value[1] === '9'){
    inp2.value = 'ORANGE';
  }

  //camtel

  else if(input.value[0] === '6' && input.value[1] === '2'){
    inp2.value = 'CAMTEL';
  }

  //nexttel
  else if(input.value[0] === '6' && input.value[1] === '6'){
    inp2.value = 'NEXTTEL';
  }
  else if(input.length < 9){
    inp2.value = 'Please Enter a valid number';
  }
  else {
    inp2.value = 'please enter a valid number';
  }
})


// const btn1 = document.getElementById('btn');
// const carrierType = {
//   mtn: 'MTN',
//   mtnS: [67, 68, 650, 651, 652, 653, 654],
//   orange: 'ORANGE',
//   orangeS: [69, 655, 656, 657, 658, 659],
//   camtel: 'CAMTEL',
//   camtelS: [62],
//   nexttel: 'NEXTTEL',
//   nexttelS: [66],
// }
// console.log(carrierType.mtn);


// btn1.addEventListener('click', function(e){
//     e.preventDefault()

//     const output = document.getElementById('carriertype');
//     // const disp = document.getElementById('display');
//     const input = document.getElementById('phonenumber');
//     let error = document.getElementById('error');
//   })