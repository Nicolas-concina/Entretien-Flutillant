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

/* Deuxieme Test Palindrome */

const palindrome = (str) => {
    const strMin = str.toLowerCase();
    if(strMin.split('').reverse().join('') === strMin){
        console.log(`${strMin} est un Palindrome`);
        return true ;
    }else{
        console.log(`${strMin} n'est pas un Palindrome`);
        return false ;
    }
}
console.log(palindrome("kayaK"));