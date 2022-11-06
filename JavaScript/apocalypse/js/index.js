// import { Player } from "./player.js";
import { Player } from "./playerteste.js";

// Init Function
function gameInit() {
    
    // Setting screen const
    const screen = document.getElementById('screen');

    // Creating the game's objects
    const jogador = new Player();
    jogador.movePlayer();


    // Adding objects in screen
    screen.appendChild(jogador.playerObject);
}

// Init Function Activation
window.addEventListener('load', gameInit);

