const body = document.querySelector('body');
const btn = document.getElementById('myButton');

btn.addEventListener('click', () => {
    const paragraphe = document.createElement('p');
    paragraphe.textContent = 'Bonjour, vous avez cliqué sur le bouton !'
    body.appendChild(paragraphe);
})

