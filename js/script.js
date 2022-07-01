//Project 1: Your age in Days
/*let ageInDays = (2022 - birthYear) * 365;
console.log(ageInDays);*/

function ageInDays() {
let birthYear = prompt('What year were you born... Good friend?');
let ageInDays = (2022 - birthYear) * 365;
let h1 = document.createElement('h1');
let textAnswer = document.createTextNode('Awesome... you are ' + ageInDays + ' days old!!!');
h1.setAttribute('id', 'ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
    
}

//Project 2: Cat Generator

function generateCat() {
    let image = document.createElement('img');
    let div = document.getElementById('flex-cat-gen');
    image.src = "https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif";
    div.appendChild(image);

}


//Project 4: Change the color of all Buttons

let all_buttons = document.getElementsByTagName('button');

let copyAllButtons = []
for (let i=0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1]);
}

function buttonColorChange(buttonThingy) {
    if (buttonThingy.value === 'red') {
        buttonsRed();
    }else if (buttonThingy.value === 'green') {
        buttonsGreen();
    }else if (buttonThingy.value ==='reset') {
        buttonColorReset();
    }else if (buttonThingy.value === 'random') {
        randomColors();
    }
}

function buttonsRed() {
    for (let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonsGreen() {
    for (let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonColorReset() {
    for (let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
}
}

function randomColors() {
    let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']

    for (let i=0; i < all_buttons.length; i++) {
    let randomNumber = Math.floor(Math.random() * 4);
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(choices[randomNumber]);
}
}