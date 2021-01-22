// how JavaScript reduce works ?
let numbers = [12,3,5,10,20,50];
let sum = numbers.reduce((a,b) => a+b ) ;
console.log(sum);


// reduce implement
Array.prototype.myReuduce = function(callback, acc){
    let newArray = [...this] ;
    for(let i = 0 ; i<newArray.length ; i++){
        acc = callback(acc, newArray[i]);
    }
    return acc ;
}

let result  = numbers.myReuduce((acc, cur) => {
    return acc + cur
}, 0)
console.log(result);

