String.prototype._statrsWith = function(value){
    let str= this ;
    let arr = str.split('');
    let result ;
    if(arr[0] === value){
        result = true;
    }else{
        result = false ;
    }
    return result ;
  }