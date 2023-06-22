//Codigo propio
let arr=[];
function arrSin3(array){
    for (x of array) {
        if(x%3!=0 || x==0){
            arr.push(x);
        }
    }
    
    return arr;
}
arrSin3([10,4,3,-1,12,9,0]);
//Funcionando correctamente