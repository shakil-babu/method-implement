Array.prototype._some = function(callback){
    const { length } = this;
     for (let index = 0; index < length; index += 1) {
       const value = this[index];
       if (callback(value, index, this)) {
         return true;
       }
     }
    
     return false;
    }