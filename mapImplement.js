// How JavaScript map works ?
let arr = [12,3,4,5,6] ;
let finalResult = arr.map((item) => {
    return item -2;
})

console.log(finalResult);


// JavaScript map implementation
Array.prototype.myMap = function(callback){
    let result = [] ;
    let newArray = [...this] ;
    for(let i = 0 ; i<newArray.length ; i++){
        result.push(callback(newArray[i], i , newArray));
    }
    return result ;
}

let result = arr.myMap((item, index, arr)=> {
    return item - 2 ;
})
console.log(result);

