const matrix = [
    ["-","-","-"],
    ["-","-","-"],
    ["-","-","-"]
];

let playerTurn = 1;

const makeMove = (positionX, positionY, player) => {
    if(player === 1) {
       matrix[positionX][positionY] = 'X';
       playerTurn = 2;     
    } else {
       matrix[positionX][positionY] = 'O';
       playerTurn = 1;
    }
    printMatrix();
}

const printMatrix = () => {
    matrix.forEach(row => console.log(row));
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`What's your name?`, (name) => {
      makeMove(name[0], name[1], playerTurn)
    readline.close()
  })


// const inquirer = require('inquirer')

// var questions = [1,2,3,4,5,6,7,8,9];
// questions.fill({
//     type: 'input',
//     name: 'name',
//     message: `What's your move P${}`,
//   })

//   inquirer.prompt(questions)
//   .then(answers => {
//       const x = answers['name'][0];
//       const y = answers['name'][1];
//       makeMove(x, y, playerTurn)
//   })
//   .catch(err => console.log(err))