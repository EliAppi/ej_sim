/*// Codigo propio
function getRealFloor(n) {
    if (n<=0){
      return n;
    }
    else if(n>13){
      return (n-2);
    }
    else{
      return (n-1);
    }
  }
  getRealFloor(4);
// Funcionando */

// Reducido
function getRealFloor(n) {
return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
}
getRealFloor(6);