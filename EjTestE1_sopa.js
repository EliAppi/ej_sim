let arr=[];
let arrSopa=[];
let key="avanzatech";
let matrix=["avanzatech","ajsVnrijxi","ñgkrbfAndb","pdknantñdk","gbitibdkñz","fkigadhlut","dctjlyvsak","yghkedqpkm","cgshkmzdip","avanzatecH"];
let cont=0;
let w=0;

for(x of matrix){
    minX=x.toLowerCase(); //Cambio a minúsculas cada subarray
    
    if(minX==key){ //Comparo cada sub array con key
    cont++; //Si es ==key cuento
    }
}
//console.log(cont);


let i=0;
let m=0;
let k=0;
let pos=0
for(m;m<matrix.length;m++){
    arr.push(matrix[m].toLowerCase()); //Guardo sub array en array  
    sArr=arr.toString();
    k=pos;
    for(k;k<key.length;k++){  
        //console.log(matrix[0]);
        i=0;
        for(i;i<sArr.length;i++){//Sino comparo letra por letra
            //console.log(sArr);
            if(key[k]==sArr[i]){//Si letra es igual guardo en Nuevo array
                //console.log(x);
                arrSopa.push(key[k]);
                i=sArr.length;
                pos=k+1;
                k=key.length;
                arr=[];
            }
        }
    }
}

//console.log(arrSopa);
//Al finalizar con todas las letras
if (key==arrSopa.join("")){//si Nuevo array es igual a key
    cont++; //Cuento
}
console.log(cont);
