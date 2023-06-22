/*//Codigo propio
function decBin (num){
    let arr=[];
    res=num;
    while(res>1){
        arr.push(parseInt(res)%2);
        res/=2;
    }
    if (res==1){
        arr.push(1);
    }
    return arr.reverse();
}
decBin(1);
//Funcionando correctamente*/


function decBin (num){
    let bin = num.toString(2);
    return bin;
}
decBin(1);