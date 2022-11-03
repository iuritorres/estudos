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
        this.playerObject.src = '../sprites/survivor.png';

    };

    movePlayer() {
        // Add event listener on keydown
        document.addEventListener('keydown', handleKeydown);

        function handleKeydown(event) {

            // Finding the pressed key
            const keyPressed = event.key;
            
            // Validating movements
            const acceptedMoves = ['w', 'a', 's', 'd'];

            if (acceptedMoves.includes(keyPressed)) {

                switch (keyPressed) {
                    case acceptedMoves[0]:
                        console.log(`Player se moveu pra frente (${keyPressed})`)
                        break;

                    case acceptedMoves[1]:
                        console.log(`Player se moveu pra esquerda (${keyPressed})`)
                        break;

                    case acceptedMoves[2]:
                        console.log(`Player se moveu pra tras (${keyPressed})`)
                        break;

                    case acceptedMoves[3]:
                        console.log(`Player se moveu pra direita (${keyPressed})`)
                        break;
                }
            };
        };
    };

};

