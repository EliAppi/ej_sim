/*// Codigo propio
let token=[];
let txt;
let rta=0;
let cont=0;
let i=0;
let forcey;

function buscatoken(txt){
    for(x of txt){
        token.push(x);
        i++;
        if(x==" "||i==txt.length){
            for (y of token){
                forcey=Number(y);
                rta+=forcey;
            }
            if (rta-rta===0){
                cont++;
            }
            token=[];
            rta=0;
        }
    }
    console.log("Cantidad de token: "+cont);
}

buscatoken("G4t0 M1 51 Fus");*/
// Funcionando sin espacio al inicio

// Codigo propio reducido
let cont=0;
function buscatoken(txt){
    rTxt=txt.split(" ");
    for(x of rTxt){
        if (Number(x)>0){
            cont++;
        }
    }
    return cont;
}
buscatoken("78 G4t05 78M1 51 Fus14 84");
//Funcionando correctamente