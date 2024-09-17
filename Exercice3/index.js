function calculateAverage(numberTable) {
    if (numberTable.length > 0) {
        //reduce pour calculer la somme des nombres dans le tableau
        const total = numberTable.reduce((total, number) => total + number, 0);
        //calcul de la moyenne
        const average = total / numberTable.length;

        return average;
    } else {
        return 'No numbers to calculate average';
    }
}

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])); // retourne 10
console.log(calculateAverage([10, 20, 30, 20])); // retourne 20
console.log(calculateAverage([])); // retourne 'No numbers to calculate average'

export default calculateAverage;
