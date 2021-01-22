// how JavaScript sort method works ? 
let numbers = [20 , 9, 100 , 43,];
let accendingOrder = numbers.sort((a,b) => a-b) ;
console.log(accendingOrder);


// sort method implementation
Array.prototype.mySort = function(callback){
    
    let newArray = [...this] ;
    for(let i = 0 ; i<newArray.length ; i++){
        for(let j = 0 ; j<newArray.length ; j++){
            if(callback(newArray[j],newArray[j+1])>0){
                [newArray[j], newArray[j+1]] = [newArray[j+1] , newArray[j]]
            }
        }
    }
    return newArray ;
}
let result = numbers.mySort((a,b)=>a-b);
console.log(result);



