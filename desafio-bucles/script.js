console.log('impares del 1 al 20');
for (let i=1; i < 21 ; i++){
    if( i%2 !=0){
        console.log("🚀", i)
    }
}

console.log('multiplos de 3 entre 100 al 0');
for (let a=100; a >= 0 ; a--){
    if( a%3===0){
        console.log("🚀", a)
    }
}

console.log('secuencia');
for (let b=4; b > -4; b-=1.5){
    console.log("🚀", b)    
}

console.log('Sigma');
let sum= 0;
for(let index =1; index < 101; index++){
    sum += index;
}
console.log("🚀", sum);

console.log('Factorial');
    let product = 1;
    for (let f = 1; f < 13; f++) {
        product *= f; 
    }
console.log("🚀", product);