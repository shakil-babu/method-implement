// find array element index using _index
Array.prototype._index = function(value){
    let arr = [...this];
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if(item === value){
            return i ;
        }
    }
  }