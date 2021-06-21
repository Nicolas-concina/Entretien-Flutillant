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

/*Troisieme Test Travelling Snails */



const heights = [10,5,8,3,25,7,9];  // point de depart
const dSpeed = [2,3,2,4,5,3,2];  // distance ascendant parcouru
const nSpeed = [1,2,1,3,1,2,0]; // distance descendant parcouru
const tempsArriver = [];



for (let i = 0; i < heights.length; i++) {
    let tempsArrive =0;
   while (heights[i]>0) {
       heights[i]=heights[i]-dSpeed[i]+nSpeed[i];
      tempsArrive++;
   }
   tempsArriver.push(tempsArrive);
   tempsArrive=0;
}
console.log(tempsArriver);
 const ordreArriver = tempsArriver.sort(compare);
console.log(ordreArriver);




// prendre le premiere iterateur de chaque array pour le soustraire la valeur de dSpeed puis lui ajouter la valeur de nSpeed.
// on compte le nbr de fois qu il boucle pour arriver a 0 et ont obtient leur nbr d iteration avec sa on a un classement
// ex: (10 - 2) + 1 tant que heigth >= 0 je recomence si height = 0 je le stock dans temps arriver et  a chaque fois que je recomence j ajoute 1 tempsArriver
//
