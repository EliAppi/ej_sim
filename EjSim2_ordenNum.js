

/*//Codigo propio
let oArr=arr.sort();
let arr1=[];
let arr2=[];
let oArr1=[];
// code goes here  
for(x of oArr){
    if(x>=0){
        arr1.push(x);
    }
    else{
        arr2.push(x);
    }
}
console.log((arr1.reverse()).concat(arr2));
//No funciona con numeros mayores a 9*/

//Con funcion dentro de metodo
function oArr(array){
    array.sort((a,b)=>b-a);
    return array;
}
oArr([12,4,-8,0,-9,-2,-1]);
//Funciona correctamente