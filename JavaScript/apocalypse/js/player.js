export class Player {
    constructor() {

        // Attributes
        this.attributes = {
            'health': 20,
            'hunger': 20,
            'stamina': 10
        };

        // Equipment
        this.equipment = {
            'helmet': '',
            'chestplate': '',
            'leggings': '',
            'boots': ''
        };

        // Inventory
        this.inventory = [];

        // Hotbar
        this.hotbar = [];

        // Secondary Hand
        this.secondaryHand = '';


        // Creating player sprite
        this.playerObject = document.createElement('img');
        this.playerObject.classList.add('player-object');
        this.playerObject.src = '../sprites/characters/survivor.png';

    };

    movePlayer() {
        // Add event listener on keydown
        document.addEventListener('keydown', (event) => {
            this.keyPressed = event.key;

            // Validating movements
            const acceptedMoves = ['w', 'a', 's', 'd'];

            if ( acceptedMoves.includes(this.keyPressed) ) {

                // W => MoveFoward
                if ( this.keyPressed === acceptedMoves[0] ) {
                    console.log(`Player se moveu pra frente (${this.keyPressed})`)

                    // Getting current position value Y
                    const playerPositionClassValueY = getComputedStyle(document.documentElement).getPropertyValue('--player-position-y');
                    this.playerPositionStringY = playerPositionClassValueY.replace('px', '');
                    this.playerPositionY = Number(this.playerPositionStringY);

                    // Move
                    var newPosition = `${this.playerPositionY - 10}px`;
                    document.documentElement.style.setProperty('--player-position-y', newPosition);
                };
                
                // A => MoveLeft
                if ( this.keyPressed === acceptedMoves[1] ) {
                    console.log(`Player se moveu pra esquerda (${this.keyPressed})`);

                    // Flip Sprite
                    this.playerObject.classList.add('sprite-flip');

                    // Getting current position value X
                    const playerPositionClassValueX = getComputedStyle(document.documentElement).getPropertyValue('--player-position-x');
                    this.playerPositionStringX = playerPositionClassValueX.replace('px', '');
                    this.playerPositionX = Number(this.playerPositionStringX);

                    // Move
                    var newPosition = `${this.playerPositionX - 10}px`;
                    document.documentElement.style.setProperty('--player-position-x', newPosition);
                };

                // S => MoveBackward
                if ( this.keyPressed === acceptedMoves[2] ) {
                    console.log(`Player se moveu pra tras (${this.keyPressed})`);

                    // Getting current position value Y
                    const playerPositionClassValueY = getComputedStyle(document.documentElement).getPropertyValue('--player-position-y');
                    this.playerPositionStringY = playerPositionClassValueY.replace('px', '');
                    this.playerPositionY = Number(this.playerPositionStringY);

                    // Move
                    var newPosition = `${this.playerPositionY + 10}px`;
                    document.documentElement.style.setProperty('--player-position-y', newPosition);
                };

                // D => MoveRight
                if ( this.keyPressed === acceptedMoves[3] ) {
                    console.log(`Player se moveu pra direita (${this.keyPressed})`);

                    // Flip Sprite
                    this.playerObject.classList.remove('sprite-flip');

                    // Getting current position value X
                    const playerPositionClassValueX = getComputedStyle(document.documentElement).getPropertyValue('--player-position-x');
                    this.playerPositionStringX = playerPositionClassValueX.replace('px', '');
                    this.playerPositionX = Number(this.playerPositionStringX);

                    // Move
                    var newPosition = `${this.playerPositionX + 10}px`;
                    document.documentElement.style.setProperty('--player-position-x', newPosition);
                };
            };

        });
    };
};


