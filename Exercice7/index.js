const input = document.getElementById('decimalInput');
const result = document.getElementById('binaryResult');

function convertToBinary(){
    let decimal = input.value;
    
    //vérification validité valeur saisie
    if (decimal === "" || isNaN(decimal)) {
        document.getElementById("result").innerHTML = "veuillez entrer un nombre valide";
        return;
    }

    //conversion en entier
    decimal = parseInt(decimal); 

     // Convertir le nombre décimal en binaire
     let binary = decimal.toString(2);

     // Afficher le résultat
     result.innerHTML  = `résultat en binaire : ${binary}`;
}