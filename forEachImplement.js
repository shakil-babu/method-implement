// How JavaScript forEach method works ? 
let details = ['shakil','babu',20,'Computer','Software developer'];
details.forEach((item, index , arr)=>{
    console.log(index, item);
    
    // now you can play with index , item, arr . whatever you want ;
}) 


// forEach method implement
Array.prototype.myforEach = function(callback){
    let newArray = [...this] ;
    for(let i = 0 ; i<newArray.length ; i++){
        callback(newArray[i], i , newArray);
    }
}
details.myforEach((item, index, arr) => {
    console.log(index,item);
    // now you can play with index,item,arr too
})