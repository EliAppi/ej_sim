//Fibonacci inmediatamente menor
function fibo(num){
  let secuFibo=[0,1];
  let fibo=0;
  let i=0;
  let k=0;
  for (i;i<num;i++){
    fibo=secuFibo[i]+secuFibo[i+1];
    secuFibo.push(fibo);
  }
  
  for (x of secuFibo){
    if(x>=num){
      return secuFibo[k-1];
    }
    else{
      k++;
    }
  }
}
fibo(10);
//Funcionando correctamente



/*//Fibonacci inm.. menor-mayor
let n;
let suma=0;
let j=0;
let k=0;
let secuFibo=[0,1];

function creaFibo(n){
    for (let i=0;i<n+2;i++){
        suma=secuFibo[i]+secuFibo[i+1];
        secuFibo.push(suma);
    }
    for (x of secuFibo){
        if (n==1){
            console.log("Inmediatamente mayor: "+0);
            console.log("Inmediatamente menor: "+2);
            break;
        }
        else if (x==n){
            console.log("Inmediatamente mayor: "+secuFibo[k+1]);
            console.log("Inmediatamente menor: "+secuFibo[k-1]);
            break;
        }
        else if (x>n){
            console.log("Inmediatamente mayor: "+x);
            console.log("Inmediatamente menor: "+secuFibo[k-1]);
            break;
        }    
        else{
            k++;
        }
    }
}
creaFibo(13);
//Funcionando correctamente*/