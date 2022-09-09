function remove(e){
    console.log(e);
    e.parentNode.parentNode.removeChild(e.parentNode);
}


const arrayCelsius = [];
for(let i = 0;  i < 8; i++){
    let tempValue = document.getElementById("temp-value-"+i+"");
    arrayCelsius.push(parseInt(tempValue.innerText, 10)) ;
}
console.log(arrayCelsius);


function changeScale(e){
    let arrayFarenheit = [];
    for(let i = 0;  i < 8; i++){
        let tempValue = document.getElementById("temp-value-"+i+"");
        if (e.value === 'ºF'){
            arrayFarenheit[i] =  arrayCelsius[i]*(9/5) +32;
            tempValue.innerText = parseInt(arrayFarenheit[i]);
        }
        else if (e.value === 'ºC'){
            tempValue.innerText = parseInt(arrayCelsius[i]);
        }
    }
    console.log(arrayCelsius);
    console.log(e.value);
    
}