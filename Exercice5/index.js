const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');

//écouteur d'événement pr le btn Envoyer
form.addEventListener('submit', function(event) {
    //empêche le comportement de défaut du formulaire
    event.preventDefault();

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

    console.log('Nom:', nameValue);
    console.log('Adresse e-mail:', emailValue);
});
