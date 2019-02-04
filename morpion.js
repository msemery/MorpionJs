
var playerOneHasToPlay=true; 
var x= "X";
var o="O";
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
    if (horizontalLine(charToCheck)) {
        alert("toto");
    }
}

//fonction pour vérifier le gagnant (horizontal, vertical, diagonal droite, diagonale gauche)

function horizontalLine(charToCheck) {
    for (let i = 0; i <= grid.length-3; i+=3) {
        if (grid[i] === charToCheck && grid[i+1] === charToCheck && grid[i+2] ===charToCheck) {
            return true;
       } else if (grid[i]=== charToCheck && grid[i+3] === charToCheck && grid[i+6]===charToCheck) {
            return true;
        } else if (grid[i+2]=== charToCheck && grid[i+4] === charToCheck && grid[i+6]===charToCheck) {
            return true;
        } else if (grid[i]=== charToCheck && grid[i+4] === charToCheck && grid[i+8]===charToCheck) {
            return true;
        } 
    }
}

//fonction pour réinitialiser la grille

function reset() {
    grid= new Array(9);
    var pionsArray = document.getElementsByClassName("pionButton");
    for (let i = 0; i < pionsArray.length; i++) {
        pionsArray[i].innerHTML= "click ici";
        
    }
}
