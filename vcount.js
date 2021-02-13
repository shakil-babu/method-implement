// vowel count in a sentence
String.prototype._vcount = function(){
    let lower = this.toLowerCase();
    let sp = lower.split('');
    let count = 0 ;
    for(let i = 0 ; i<sp.length ; i++){
        if(sp[i] == 'a' || sp[i] == 'e' || sp[i] == 'i' || sp[i]=='o' || sp[i] =='u'){
          count +=1
        }
    }
    return count ;
  }