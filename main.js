console.log("Let me introduce you to a game called rock paper scissors")


// Creates a random number and converts it to a string
cpu_generator = (number = 0) => {
    number = Math.floor(Math.random()* 3) + 1 // Random number generated from 1 -> 3
    if (number === 1){
        return 'r';
    }
    else if (number === 2){
        return 'p';
    }
    else{
        return 's';
    }
}

let cpu = cpu_generator();
let user = "";

// Prompt for the user using a anonymous function. 
let user_choice = function () {
    let choice = ""
    console.log(choice = prompt("Enter Rock, Paper, or Scissors"));
    
    // I only care about the first character of the user choice. 
    choice = choice.toLocaleLowerCase().charAt(0);

    if ((choice === 'r' || choice === 'p' ) || choice === 's'){
        return choice;
    } else{
        return;
    }
}

// I want to display a total of the results.
let user_wins =
    user_loses =  
    draws = 0;

let info = function () {
    console.log("Totals");
    console.log("Wins:  ",user_wins);
    console.log("Loses:  ",Math.abs(user_loses));
    console.log("Draws:  ",draws);
}

// Evaluate the game and returns a number corresponding to win, lose, or draw.
// 1 = win , -1 = lost , 0 = draw
evaluate = (userS,cpuS) => {
    if (userS === 'r'){
        // User Selects Rock
        if (cpuS === 's'){
            return 1;
        }
        else if (cpuS === 'p'){
            return -1;
        }
        else {
            return 0;
        }
    } else if (userS === 'p'){
        // User Selects Paper
        if (cpuS === 'r'){
            return 1;
        }
        else if (cpuS === 's'){
            return -1;
        }
        else {
            return 0;
        }
    } else {
        // User Selects Scissor
        if (cpuS === 'r'){
            return -1;
        }
        else if (cpuS === 'p'){
            return 1;
        }
        else {
            return 0;
        }
    } 
}


// Regular Expression that checks first character of user input 
let rg = /^[rps]$/;


// Updates the variables and returns the result of the game through a string
function track (result= 0) {
    if (result > 0){
        user_wins += 1;
        //return "User Wins!";
    } else if (result < 0){
        user_loses -= 1;
        //return "User Loses";
    } else {
        draws += 1;
        //return "Draw"
    }
}

function playRound(button){
    let user_selection = button.outerText;
    user_selection = user_selection.toLocaleLowerCase().charAt(0);
    let cpu = cpu_generator();
    track(evaluate(user_selection,cpu));
    
}


let btn = document.querySelectorAll('#btn');

// Adding the totals into the sub container section of the web page
let container = document.querySelector('.sub-container');

let subHeading = document.createElement('p');
subHeading.classList.add('subcontainerText');
subHeading.setAttribute('id','subtitle');
subHeading.innerText = "Stats";

let subText = document.createElement('p');
subText.classList.add('subcontainerText');
//subText.innerText = "Wins:\t\t\t" + user_wins;
//subText.innerText = "Wins:\t" + user_wins +"\n\nLoses:\t" + user_loses + "\n\nDraws:\t" + draws;

let subText2 = document.createElement('p');
subText2.classList.add('subcontainerText');
//subText2.innerText = "Loses:\t\t\t" + user_loses;

let subText3 = document.createElement('p');
subText3.classList.add('subcontainerText');
//subText3.innerText = "Draws:\t\t\t" + draws;


let subText4 = document.createElement('p');
subText4.classList.add('subcontainerText');



subHeading.append(subText);
subHeading.append(subText2);
subHeading.append(subText3);
container.append(subHeading);



let write = function () {
    subHeading.innerText = "Stats";
    subText.innerText = "Wins:\t" + user_wins;
    subText2.innerText = "Loses:\t" + Math.abs(user_loses);
    subText3.innerText = "Draws:\t" + draws;
    subHeading.append(subText);
    subHeading.append(subText2);
    subHeading.append(subText3);
    container.append(subHeading);
};


cpu_generator = (number = 0) => {
    number = Math.floor(Math.random()* 3) + 1 // Random number generated from 1 -> 3
    if (number === 1){
        return 'r';
    }
    else if (number === 2){
        return 'p';
    }
    else{
        return 's';
    }
}


function declare_winner() {
    let text = " is the Winner";
    let cpuName = "CPU";
    let userName = "User";

    if ( (user_wins <= 5) || (user_loses >= -5) ){
        console.log("USER_LOSES:  "+user_loses);
        if (user_wins == 5){
            subText4.innerText = userName + text;
            subHeading.append(subText4);
            user_wins = 0;
            user_loses = 0;
            draws = 0;
        }
        if (user_loses == -5){
            subText4.innerText = cpuName + text;
            subHeading.append(subText4);
            user_wins = 0;
            user_loses = 0;
            draws = 0;
        }
    }
}


console.log(container);


btn.forEach((button) => {
    button.addEventListener('click', e => {

        // js program for the game logic
        //console.log(button.outerText);
        playRound(button);
        //info();
        write();
        declare_winner();
    });
});

