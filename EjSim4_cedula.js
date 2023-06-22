// Codigo propio
let meses=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
let mes;

function cedula(num){
  let strNum=String(num);
  let dia=strNum[4]+strNum[5];
  let mes=meses[strNum[2]+(strNum[3])-1];
  let anno=strNum[0]+strNum[1];

  if(strNum[4]==0){   //Verifico si el dia comienza con 0
    dia=dia[1];
  }

  console.log("Nacimiento el "+dia+" de "+mes+" de 19"+anno);
}
cedula(701009438195);
// Funcionando