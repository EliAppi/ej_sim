/*//Codigo propio
let str="Anita lava la tina con agua y jabon";
let arr=[];
let cont=0;
let i=1;
// code goes here 
for (x of str) {
arr.push(x);
if(x==" " || i==str.length){
    if(arr[0]=="A" || arr[0]=="a"){
    cont++;
    }
    arr=[];
    i++;
}
else{
    i++;
}
}
console.log(cont); */
// Funcionando


// Codigo reducido con metodos
function Aacont(str){
    let cont=0;
    let min=str.toLowerCase();
    let cStr=min.split(" ");

    for (x of cStr){
        if (x.startsWith("a")){
            cont++;
        }
    }
    return cont;
}
Aacont("Anita lava la tina con agua y jabon Aaqui y alla");
//Funcionando