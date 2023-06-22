//Codigo propio retornaa array con numeros impares
let arr=[];
function arrImpar(num){
    let lim=num+num;
    for(let i=0;i<=lim;i++){
        if (i%2!=0){
            arr.push(i);
        }
    }
    return arr;
}
arrImpar(3);
//Funcionando correctamente