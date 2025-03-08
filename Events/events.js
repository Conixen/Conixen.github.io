const secretArea = document.getElementById('secret-area');
let easterEgg = false; 

secretArea.addEventListener('click', () => {
    if (easterEgg) {
        document.body.style.backgroundColor = 'white'; 
    } else {
        document.body.style.backgroundColor = 'black'; 
    }
    easterEgg = !easterEgg; 
});

let input = ''; 
const secretCode1 = '1337'; 
const secretCode2 = '69'; 

document.addEventListener('keydown', (event) => {
    input += event.key; 
    
    if (input.includes(secretCode1)) {
        alert("En ELITE gamer här"); 
        input = ''; 
    }

    if (input.includes(secretCode2)) {
        alert("Nice!"); 
        input = ''; 
    }

    if (input.length > Math.max(secretCode1.length, secretCode2.length)) {
        input = input.slice(-Math.max(secretCode1.length, secretCode2.length));
    }
});