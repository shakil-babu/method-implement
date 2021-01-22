// how JavaScript find method works ? 
let numbers = [10,20,30,40,25,45,3];
let findTwenty = numbers.find((item) => item==20);
console.log(findTwenty);


// find method implementation
Array.prototype.myFind = function(callback){
    let arr = [...this];
    for(let i = 0 ; i<arr.length ;i++){
        if(callback(arr[i])){
            return arr[i];
            break;
        }
    }
}

let rs = numbers.myFind((item) => item > 20);
console.log(rs);