Array.prototype._every = function(callback){
    let arr = [...this];
    for (let i = 0; i < arr.length; i++) {
     if(callback(arr[i]) == false){
         return false ;
     }   
    }
    return true;
  }