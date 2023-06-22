/*// Codigo propio
let cont=0;
function cLetra(str){
    for(x of str){
        if(x=="a" || x=="A"){
            cont++;
        }
    }
    return cont;
}
cLetra("Algoritmos y programacion");
//Funciona correctamente*/


//Codigo propio busca caracter en parametro
let cont=0;
function cLetra(str,letra){
    for(x of str){
        if(x===letra){
            cont++;
        }
    }
    return cont;
}
cLetra("Algoritmos y programacion","m");
//Funcionando correctamente