/*//Codigo si se toma cada unidad por separado
let pal=[5,8,3,1,8,2,5,4,3,5];
let str="10";
let arr=str.split("");
let sum=0;

for(x of arr){
    i=x;
    for(i;i>=0;i--){
        sum+=pal[i];
    }
}
console.log(sum);
//Funciona correctamente*/


//Codigo si se acumulan los palitos cada 9
let pal=[5,8,3,1,8,2,5,4,3,5];
let str="100";
let num=Number(str);
let sum=0;
let j=0;

if(num>9){
    veces=num/9;
    intVeces=Math.floor(veces);
    //console.log(intVeces);
    while(j<intVeces){
        for(i=9;i>=0;i--){
            sum+=pal[i];
            //console.log(sum);
        }
        j++;    
    }
    rest=num%9;
    //console.log(rest);
    for(i=rest;i>=0;i--){
        sum+=pal[i];
    }
}else{
    i=num;
    for(i;i>=0;i--){
        sum+=pal[i];
        
    }
}
console.log(sum);
//Funciona correctamente