let img = document.querySelector('img');
let button = document.querySelector('.btn-primary');
let h5 = document.querySelector('.card-title');
let cardText = document.querySelector('.card-text');


h5.innerText = 'Random Dog';
cardText.innerText = 'Click on button below to generate a Random Dog image from the API call';

button.addEventListener('click', function () {
    // this link is for the API with all the random dog images
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log(data);
            img.src = data.message;
        })
})




// WEATHER APP 
let form = document.querySelector('form');
let userInput = document.querySelector('.form-control');
let buttonW = document.querySelector('.btn-sm');
let displayArea = document.querySelector('.alert-success');

form.addEventListener('submit', (event) => {
    event.preventDefault
    
    let url = `https://goweather.herokuapp.com/weather/${userInput.value}`
    console.log(encodeURI(url));
    
    fetch(encodeURI(url))
        .then((response) => {
        return response.json()
        }).then((data) => {
             displayArea.innerText = `${data.description}, ${data.temperature}, ${data.wind}`
        })
})
