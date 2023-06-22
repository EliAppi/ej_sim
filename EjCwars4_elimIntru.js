function eliminateUnsetBits(number) {
    arrBin=[];
    for(x of number){
      if(x!=0){
        arrBin.push(x);
      }
    }
    if(arrBin.length==0){
        arrBin="0";
    }
    
    function binDec(bin){
      let arrPot=[];
      let arr=[];
      let j=0;
      for (let i=0;i<bin.length;i++){
          arrPot.push(2**i);
      }
      for (x of (arrPot.reverse())){
          arr.push(x*bin[j]);
          j++;
      }
      dec=arr.reduce((Acu,curr)=>Acu+curr);
    }
    
    binDec(arrBin);
    return dec;
    
  }
  eliminateUnsetBits("01011111");