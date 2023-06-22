//Codigo propio reducido
let arr=[];
function oArr(num){
    str=Array.from(String(num));
    rStr=str.reverse();
    for (x of rStr){
        nX=Number(x);
        if (nX>=0){
            arr.push(nX);
        }
    }
    return arr;
}
oArr(-87654321);
//Funcionando correctamente positivos y negativos