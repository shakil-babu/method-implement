// pop method
Array.prototype._pop = function(){
    const value = this[this.length - 1];
    this.length = this.length - 1;
    return value;
  }