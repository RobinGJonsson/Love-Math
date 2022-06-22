//Wait for DOM to finish loading before running the game
//Get button elements and add event listeners to them

document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function() {
            if (this.getAttribute('data-type') === 'submit') {
                alert('You Clciked Submit!');
            } else {
                let gameType = this.getAttribute('data-type');
                runGame(gameType);
            }
        })
    }

    runGame('addition');
})

function runGame(gameType) {
    //Create random numbers between 1-25 
    let num1 = Math.floor(Math.random() * 25 + 1)
    let num2 = Math.floor(Math.random() * 25 + 1)

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2)
    } else {
        alert(`Unknown Game type: ${gameType}`)
        throw `Unknown gametpye: ${gameType}, aborting`
    }
}

function checkAnswer() {
    
}

function calculateCorrectAnswer() {
    
}

function incrementScore() {
    
}

function incrementWorngAnswer() {
    
}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operand').textContent = '+';
}

function displaySubtractQuestion() {
    
}

function displayMultiplyQuestion() {
    
}
