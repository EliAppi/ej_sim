/*//Codigo propio
function palindromo(str){
    lowRegStr = str.toLowerCase().split(" ").join("");
    rLowRegStr= str.toLowerCase().split("").reverse().join("").split(" ").join("");
    
    if(lowRegStr==rLowRegStr){
        console.log("Palindromo");
    }else{
        console.log("No Palindromo");
    }
}
palindromo("la oso");
//Funcionando correctamente*/


//codigo reducido
function palindrome(str) {
    var re =/[^A-Za-z0-9]/g; // or var re = /[\W_]/g Expresion que elimina todos los caractares alfanumericos para casos de prueba especificos
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
}

palindrome("A man, a plan, a canal. Panama");
//Funiona correctamente