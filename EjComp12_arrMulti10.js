//Codigo propio
let arr=[];
function arrMulti10(array){
    
    for (x of array) {
        if(x%10==0 && x!=0){
            arr.push(x);
        }
    }
    arr.sort((a,b)=>a-b);
    return arr; 
}
arrMulti10([120,4,3,100000,12,500,0]);
//Funciona correctamente