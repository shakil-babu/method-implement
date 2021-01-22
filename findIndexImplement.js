// how JavaScript findIndex works ?
let numbers = [10,203,30,45,3,5] ;
let result = numbers.findIndex((item) => item == 3);
console.log(result);


// findIndex method implementation
Array.prototype.myFindIndex = function(callback){
    let arr = [...this];
    for(let i = 0 ; i<arr.length ; i++){
        if(callback(arr[i])){
            return i ; 
            break;
        }
    }
}
let find3Index = numbers.myFindIndex((item) => item == 3);
console.log(find3Index);
