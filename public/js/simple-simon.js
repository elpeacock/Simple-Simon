"use strict"

// (function (){
var givenSequence = [];
var playerSequence = [];
var randomButtonValue = '';
var i = 0;
var round = 1;

/////Start button starts game
$(".btn").click(function(e){
    ///call randomize function to start sequence
    randomize();
    ////////add round count to html
    $(".round").append("<h2>" + "Round: " + round + "</h2>");
    ///////makes it so you can only click start button once
    $(".btn").hide();
});


////Add click functionality to each button (<div>)
////make the buttons "light up" when selected/pushed
    ////maybe start with buttons at 50% opacity? click down = toggle to 100% on click/select? click up = then go back to 50%
$(".simon-button").mousedown(function(){
    $(this).css("opacity", "1");
}).mouseup(function(){
    $(this).css("opacity", ".45");
});

/////randomize button picks, math.random??

function randomize(){
    i = 0;
    randomButtonValue = Math.floor((Math.random() * 4) + 1).toString();
    getSequence();
};
    ////would need number associated with each button. assign a value? difference between data-value and value attribute in HTML

////add each new random button pick to the end of the sequence and save the new sequence
function getSequence(){
    givenSequence.push(randomButtonValue);
    console.log (givenSequence);
    playSequence();
};

/////this plays the given sequence
function playSequence(){
    givenSequence.forEach(function(givenValue, index){
        setTimeout(function(){
            switch (givenValue){
                case "1": 
                    $("#red").animate({
                        opacity: "1"
                    }, 500).animate({
                        opacity: ".45"
                    }, 0);
                    break;
                case "2": 
                    $("#yellow").animate({
                        opacity: "1"
                    }, 500).animate({
                        opacity: ".45"
                    }, 0);
                    break;
                case "3": 
                    $("#green").animate({
                        opacity: "1"
                    }, 500).animate({
                        opacity: ".45"
                    }, 0);
                    break;
                case "4": 
                    $("#blue").animate({
                        opacity: "1"
                    }, 500).animate({
                        opacity: ".45"
                    }, 0);
                    break; 
            };   
        }, (1000 * index));

    });
    playerInput();
};

//////need to record user clicks 
function playerInput(){
    $(".button").click(function(e){
        var pressedButton = $(this).data('value').toString();
        playerSequence.push(pressedButton);
    });

////need to compare given sequence to user sequence - if match, keep going. no match - start over
    //get the required button from randomly generated sequence
    var requiredButton = givenSequence[i];
    var playerButton = playerSequence[i];
    // compare the button pressed with the required button
    if (playerButton == requiredButton) {
        console.log(playerButton, requiredButton);
        // move to the next index of required button 
        i += 1;
        console.log("after +=: " + i);

        // if the last button is reached, increment/update round count
        if (givenSequence.length == playerSequence.length){
            round += 1;
            $(".round").html("<h2>" + "Round: " + round + "</h2>");
            /////clear out player sequence
            playerSequence = [];
        };
        ////if both conditions are met, call randomize to add another piece to sequence
        randomize();
    } else {
        alert ("button press fail! You lose.");
        /////return index to zero
        i = 0;
        /////return given sequence to empty array
        givenSequence = [];
        /////return round count to 1
        round = 1;
        ////show start button aagain
        $(".btn").show();


    };
};






















// })();