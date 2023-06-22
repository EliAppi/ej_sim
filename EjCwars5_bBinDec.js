function nextHigher(n) {
    
    // your code here
    function decBin (num){
        let bin = num.toString(2);
        let dBin=Array.from(bin);
        dBin.unshift(0);
        deBin=dBin.join("");
        //deBin
        return deBin
    }
    decBin(n);
    
    function cambioBin(bin){
      let= arrBin=[];
      let i=0;
      let j=0;
      rBin=bin.split("").reverse();
      for (x of rBin){
          if(x==0 && j<1){
              arrBin.push("1");
              arrBin[i-1]=0;
              j++;
          }else{
              arrBin.push(x);
              i++;
          }
      }
      nBin=arrBin.reverse().join("");
      //nBin
      return nBin;
    }
    cambioBin(deBin);
  
    function binDec(bin){
        let dec = parseInt(bin, 2);
        //dec
        return dec;
    }
    return binDec(nBin);

}
nextHigher(323423)

  