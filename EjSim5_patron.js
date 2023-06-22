/*//Codigo propio
let num=4;
let arr=[0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9];
let arr1=[];
let arr3=[];
let rArr3=[];
let pArr=[];
// code goes here 
for (let i=num;i<num+3;i++){ //Creo patron
  arr1.push(arr[i+1]);
  arr3.push(arr[i+5]);
}
arr2=[arr[num+8],num,arr[num+4]]; 
rArr3=arr3.reverse();

let sArr1=arr1.join(""); //Convierto en cadenas
let sArr2=arr2.join("");
let sArr3=rArr3.join("");

pArr.push(sArr1,sArr2,sArr3); //Creo nuevo array
console.log(pArr);
// Funciona correctamente*/


//Codigo propio reducido
let arr=[0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9];
let arr1=[];
let arr3=[];
 
function pat(num){
    for (let i=num;i<num+3;i++){ //Creo patron
      arr1.push(arr[i+1]);
      arr3.push(arr[i+5]);
    }
    arr2=[arr[num+8],num,arr[num+4]]; 
    arr3.reverse();
    
    pArr=[arr1.join(""),arr2.join(""),arr3.join("")]; //Creo nuevo array de Strings
    return pArr;
}
pat(2);
//Funciona correctamente