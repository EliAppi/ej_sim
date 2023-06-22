/* //Codigo propio
function FirstReverse(str) { 
    let arrStr=[];
    let rStr=[];
    for (x of str){
      arrStr.push(x);
    }
    rStr=arrStr.reverse();
      // code goes here  
    return rStr.join(""); 
  }
FirstReverse("coderbyte");
// Funciona correctamente */


//      Utilizando metodos
/*//Estructura f reducida
let rStr= arr=>{
    return arr.split("").reverse().join("");
}
rStr("Hola gato Ivory");*/

//Lo mismo que arriba estructura f normal
function rStr(arr){
    return arr.split("").reverse().join("");
}
rStr("Hola gato Ivory");
// Funciona correctamente


