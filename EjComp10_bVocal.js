//Codigo propio -- cantidad de vocales en String
let vocales=["a","e","i","o","u"];
let cont=0;
function bVocal(str) {
    for (x of str.toLowerCase()) {
        for (y of vocales) {
            if (y===x){
                cont++;
            }
        }
    }
    return cont;
}
bVocal("Ivory gatito de amor");
//Funcionando correctamente