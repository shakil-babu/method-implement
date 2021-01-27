String.prototype._reverse = function(){
    let str = this ; 
    let result = '' ;
    for (let i = 0; i < str.length; i++) {
        const ele = str[i];
        result = ele + result ;
    }
    return result ;
  }