// Function to animate sprites
function animateScript(element, direction) {
    let elementId = document.getElementById(element);
    let direc

    if ( direction === 'w' ) {
        direc = `-70`
    }
    
    else if (direction === 's') {
        direc = `-6`
    }

    else if (direction === 'a') {
        direc = `-38`;
        elementId.classList.remove('sprite-flip');
    }

    else if (direction === 'd') {
        direc = `-38`;
        elementId.classList.add('sprite-flip');
    };

    elementId.style.backgroundPosition = `${direc}px 0px`;
};

// Class Player
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


        // Setting player sprite
        this.playerObject = document.createElement('p');
        this.playerObject.classList.add('player-object2');
        this.playerObject.setAttribute('id', 'player-object2');

    };    

    movePlayer() {
        document.addEventListener('keydown', (event) => {
            let keyPressed = event.key;
            console.log(`A key was pressed: '${keyPressed}'.`);
            animateScript('player-object2', keyPressed);

            // W => MoveFoward
            if (keyPressed === 'w') {
                // Getting current position value Y
                const playerPositionClassValueY = getComputedStyle(document.documentElement).getPropertyValue('--player-position-y');
                this.playerPositionStringY = playerPositionClassValueY.replace('px', '');
                this.playerPositionY = Number(this.playerPositionStringY);

                // Move
                var newPosition = `${this.playerPositionY - 2}px`;
                document.documentElement.style.setProperty('--player-position-y', newPosition);
            }

            else if (keyPressed === 'a') {
                // Getting current position value X
                const playerPositionClassValueX = getComputedStyle(document.documentElement).getPropertyValue('--player-position-x');
                this.playerPositionStringX = playerPositionClassValueX.replace('px', '');
                this.playerPositionX = Number(this.playerPositionStringX);

                // Move
                var newPosition = `${this.playerPositionX - 2}px`;
                document.documentElement.style.setProperty('--player-position-x', newPosition);
            }

            else if (keyPressed === 's') {
                // Getting current position value Y
                const playerPositionClassValueY = getComputedStyle(document.documentElement).getPropertyValue('--player-position-y');
                this.playerPositionStringY = playerPositionClassValueY.replace('px', '');
                this.playerPositionY = Number(this.playerPositionStringY);

                // Move
                var newPosition = `${this.playerPositionY + 2}px`;
                document.documentElement.style.setProperty('--player-position-y', newPosition);
            }

            if (keyPressed === 'd') {
                // Getting current position value X
                const playerPositionClassValueX = getComputedStyle(document.documentElement).getPropertyValue('--player-position-x');
                this.playerPositionStringX = playerPositionClassValueX.replace('px', '');
                this.playerPositionX = Number(this.playerPositionStringX);

                // Move
                var newPosition = `${this.playerPositionX + 2}px`;
                document.documentElement.style.setProperty('--player-position-x', newPosition);
            }

        });
    };
};

