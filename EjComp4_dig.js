//Codigo propio reducido
let cont=0;
function bDig(txt){
    cTxt=txt.split(" ");
    jTxt=cTxt.join(",");
    for(x of jTxt){
        if (Number(x)>=0){
            cont++;
        }
    }
    return cont;
}
bDig("G4t05 78M1 51 Fus14 84");
//Funcionando correctamente