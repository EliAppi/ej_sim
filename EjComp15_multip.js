/*//Codigo con metodo .reduce
let arr2=[];
let prod=0;
function prodDiez(array) {
    for (x of array){
        if (x>10) {
            arr2.push(x);
        }
    }
    if (arr2.length==1){
        prod=arr2[0];
    }
    else{
        prod=arr2.reduce((Acu,curr) => Acu*curr);
    }
    return prod;
}
prodDiez([1,2,4,1,-2,20]);
//Funcionando correctamente*/


//Codigo mas sencillo
let prod=1;
function prodDiez(array){
    for(x of array){
        if (x>10){
            prod*=x;
        }
    }
    return prod;
}
prodDiez([10,11,9,30,-2,12]);
//Funcionando correctamente