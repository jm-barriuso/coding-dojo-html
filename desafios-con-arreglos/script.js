console.log("Siempre hambiente")

function siempreHambriento(arr){
    let hambre = 0;
    for(let index = 0; index < arr.length; index++){
        if (arr[index] === "comida"){
            console.log("delicioso")
            hambre++;
        }
    }
    if (hambre === 0){
        console.log("Tengo hambre")
    }
}
siempreHambriento([4, 1, 5, 7, 2])


console.log("Filtro paso alto");

function highPass(arr, cutoff){
    let filteredArr = [];
    for(let index = 0; index < arr.length; index++){
        if (arr[index]>cutoff){
            filteredArr.push(arr[index])
            
        }
    }
    return filteredArr;

}
let result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // esperamos de vuelta [6, 8, 10, 9]


console.log("mejor que el promedio")

function betterThanAverage(arr) {
    let sum = 0;
    for(let index = 0; index < arr.length; index++){
        sum+= arr[index];
    }
    let count = 0
    for(let newIndex = 0; newIndex < arr.length; newIndex++){
        if(arr[newIndex]>sum/arr.length){
            count++
        }
    }
    // cuenmta cuánmtas variables son mayores que el promedio
    return count;
}
let result2 = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result2); // esperamos 4 de vuelta

console.log('Arreglo invertido')
function reverse(arr) {
    let newArr =[]
    for(let i = arr.length; i >= 0; i--){
        newArr.push(arr[i])
    } // tu código aquí
    return newArr;
}
var result3 = reverse(["a", "b", "c", "d", "e"]);
console.log(result3); // esperamos de vuelta ["e", "d", "c", "b", "a"]

console.log("Arregl de Fibonacci")
function fibonacciArray(n) {
    // [0, 1] son los valores inciales del arreglos para calcular el resto
    let fibArr = [0, 1];
    for(let i = 0; i < n-2; i++){
        fibArr.push(fibArr[i]+fibArr[i+1])
    }
    // tu código aquí
    return fibArr;
}
var result4 = fibonacciArray(10);
console.log(result4); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

