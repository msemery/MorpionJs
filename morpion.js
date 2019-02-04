
var playerOneHasToPlay=true; 
var x= "X";
var o="O";
var hasWon = false;
var grid = new Array(9);



//déclenchement du click avec la propriété button
//tour par tour
// on met une valeur à charToCheck
// on initialize le tableau dans grid[button.id]
// et on va chercher le bouton de l'id (grâce au this")
// on initialise la fonction horizontalLine(charToCheck)...

function onButtonClicked(button) {
    console.log(grid);
    
    var charToCheck = x;
    if (playerOneHasToPlay) {
        button.innerHTML = x;
        grid[button.id] = x;
        playerOneHasToPlay = false;
    } else {
        charToCheck = o;
        button.innerHTML = o;
        grid[button.id] = o;
        playerOneHasToPlay = true;
    } 
    horizontalLine(charToCheck);
    verticalLine(charToCheck);
    diagonalLineRight(charToCheck);
    diagonalLineLeft(charToCheck);
}

//fonction pour vérifier le gagnant (horizontal, vertical, diagonal droite, diagonale gauche)

function horizontalLine(charToCheck) {
    for (let i = 0; i <= grid.length-3; i+=3) {
        if (grid[i] === charToCheck && grid[i+1] === charToCheck && grid[i+2] ===charToCheck) {
            hasWon = true;
            alert("Le joueur "+charToCheck+" a gagné");
            break;
            
       } /* else  {
            grid[i]=== o && grid[i+1 === o && grid[i+2===o]]
        }*/
    }
}

function verticalLine(charToCheck) {
    for (let i = 0; i <= grid.lenght-3; i+=3) {
       if (grid[i]=== charToCheck && grid[i+3] === charToCheck && grid[i+6]===charToCheck) {
           hasWon = true;
           alert("Le joueur "+charToCheck+" a gagné");
           break;
       } 
    }
}

function diagonalLineRight(charToCheck) {
    for (let i = 0; i <= grid.lenght-3; i+=3) {
        if (grid[i+2]=== charToCheck && grid[i+4] === charToCheck && grid[i+6]===charToCheck) {
            hasWon = true;
            alert("Le joueur "+charToCheck+" a gagné");
            break;
        } 
}
}
function diagonalLineLeft(charToCheck) {
    for (let i = 0; i <= grid.lenght-3; i+=3) {
       if (grid[i]=== charToCheck && grid[i+4] === charToCheck && grid[i+8]===charToCheck) {
           hasWon = true;
           alert("Le joueur "+charToCheck+" a gagné");
           break;
       } 
    }
}

