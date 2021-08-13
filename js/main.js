const result = document.getElementById('result');
const submit = document.getElementById('submit');


function binaryConverter( event ){
    event.preventDefault();

    const number = document.getElementById('number').value;

    if( number === ""){
        alert('Please inter a Number');
    }
    else if( number < 0 ){
        alert('Please enter a Positive Value')
    }
    else{
        result.style.visibility = 'visible';
    }

    // Conversion Desimal to Binary

    convertBinary = Number(number).toString(2);
    result.innerText = convertBinary;
    // console.log("Hellow World");
    // if( event != 'number' && event > 0 && event == ''){
    //     alert( 'Please valid data' );
    // }
}


// const link = document.querySelector('a');
submit.addEventListener('click',binaryConverter);
// link.addEventListener('click',binaryConverter);