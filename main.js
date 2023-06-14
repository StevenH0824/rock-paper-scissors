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
let cpu_wins =
    cpu_loses = 0;

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
        cpu_loses -= 1;
        return "User Wins!";
    } else if (result < 0){
        user_loses -= 1;
        cpu_wins += 1;
        return "User Loses";
    } else {
        draws += 1;
        return "Draw"
    }
}

function game (game_length = 3){
    for (i = 1; i <= game_length; i++){
        user = user_choice();
        cpu = cpu_generator();

        console.log(rg);
        console.log(typeof(rg));

        if (rg.test(user) === true){
            console.log(track(evaluate(user,cpu)));
            //console.log(cpu);
        } else{
            console.log("Terminated Program");
            break;
        }
    }
    // Displays stats of user when the game is over.
    // Can save a couple space by eliminating cpu_wins and cpu_loses.
    info();
}

// Use a prompt for user or make the games fixed and get rid of prompt.  
//game();

let string = 'hey';
let number = 3;

console.log(string *= 3)

