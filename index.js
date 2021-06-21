/* Premier Test Nombre Premier */

const nombrePremier = (n) => {
    for(let i = 0; i < n; i++){
        if(n%i === 0){
            return false;
        }else{
            return n > 1;
        }
    }
}
nombrePremier(10);