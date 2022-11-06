function sleepFor(sleepDuration) {
    let now = new Date().getTime();

    while( new Date().getTime() < (now + (sleepDuration * 1000)) ) {
        // Do nothing
    };
};

function timer(timerDuration) {
    let thousandsArray = [];
    let iArray = 0;
    
    while ( iArray <= (timerDuration * 1000) ) {
        iArray += 1000;
        thousandsArray = [...thousandsArray, 't'];
    };

    console.clear();

    for ( let i = (timerDuration + thousandsArray.length); i > thousandsArray.length; i--) {
        console.log('==================================================\n');
        console.log(`Esse timer acabará em ${i - thousandsArray.length} segundo(s)...`);
        console.log('\n==================================================');

        sleepFor(1);
        console.clear();
    };
};

timer(5);
