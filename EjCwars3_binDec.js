/*//Codigo propio
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
    return dec;
}
binDec("1001111");
//Funcionando correctamente*/


//Codigo reducido 
function binDec(bin){
    let dec = parseInt(bin, 2);
    return dec;
}
binDec("01");
//Funcionando correctamente


/*//Codigo reducido
function binDec(bin) {
    let acc = 0;
    for (i = 0; i < bin.length; i++) {
        acc = acc + (bin.startsWith("1") ? bin[i] * 2 ** i : bin[i] * 2 ** i / 2);
        
    }
    return acc;
  }
  
binDec('01001111');
//Funcionando*/

 