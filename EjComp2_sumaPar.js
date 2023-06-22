//Codigo propio sumo cantidad entre pares
let par=0;
function sPar(num){
    let lim=num+num;
    for(let i=0;i<=lim;i++){
        if (i%2==0){
            par+=i;
        }
    }
    return par;
}
sPar(5);
//Funcionando correctamente


