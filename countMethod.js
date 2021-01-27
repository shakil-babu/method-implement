String.prototype._count= function(alphavet){
    let cnv = this.split('');
    let alphavetCounter = 0 ;
    for (let i = 0; i < cnv.length; i++) {
        const element = cnv[i];
        if(element == alphavet){
            alphavetCounter++
        }
    }
    return alphavetCounter ;
  }
  

