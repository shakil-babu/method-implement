Array.prototype._join = function(joint=''){
    let arr = [...this];
    let result = '';
    for(let i = 0 ; i<arr.length ;i++){
        result += arr[i]+joint;
    }
    result +=arr[arr.length-1];
    return result ;
  
  }