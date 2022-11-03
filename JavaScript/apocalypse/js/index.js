import { Player } from "./player.js";

// Init Function
function gameInit() {
    
    // Setting screen const
    const screen = document.getElementById('screen');

    // Creating the game's objects
    const jogador = new Player();
    jogador.movePlayer();
    console.log(jogador.playerPositionY);

    // Adding objects in screen
    screen.appendChild(jogador.playerObject);
}

// Init Function Activation
window.addEventListener('load', gameInit);

