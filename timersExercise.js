//Neal Merrifield
/* countdown
Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds
 decrements the value and console.logs it. Once the value is 0 it should log “DONE!” and stop.
 randomGame
Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds
 and each time that a random number is picked, add 1 to a counter. 
If the number is greater than .75, stop the timer and console.log the number of tries it took
 before we found a number greater than .75.
 */
function countDown(time) {
    console.log("Inside Countdown");
    // for (let i = time; i >= 0; i--) {
    //     // setTimeout(function(){
    //     //     console.log("Mississippi");
    //     // },1000);
    //     if (i <= 0) {
    //         console.log("Done!");
    //     }
    //     else {
    //         setTimeout(function(){
    //             console.log(i+" Mississippi");
    //         },1000);
    //         //console.log(i);
    //     }
    // }}
    // can it be done as for loop?
    let timer = setInterval(function () {
        time--;
        if (time <= 0) {
            clearInterval(timer);
            console.log("Done!");
        }
        else {
            console.log(time);
        }
    }, 1000)
}

function randomGame() {
    console.log("Inside randomGame");
    let num;
    let times = 0;
    let timer = setInterval(function () {
        num = Math.random();
        times++;
        if (num > .75) {
            clearInterval(timer);
            console.log("It took " + times + " tries.");
        }
    }, 1000)
}

countDown(5);
setTimeout(randomGame, 6000);

