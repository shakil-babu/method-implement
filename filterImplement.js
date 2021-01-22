
// How JavaScript filter method works
let numbers = [10,20,30,40,50] ;
let result = numbers.filter((item) => item > 20);
console.log(result);


// Filter method implementation
Array.prototype.myFilter = function(callback){
    let arr = [...this] ;
    let result = [];
    for(let i = 0 ; i<=arr.length ; i++){
        if(callback(arr[i])){
            result.push(arr[i]);
        }
    }
    return result  ;
}

let res = numbers.myFilter((item) => item > 20);
console.log(res);