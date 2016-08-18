"use strict"

// (function (){
var givenSequence = [];
var randomButtonValue = '';

/////Start button starts game
$(".btn").click(function(e){
    ///call randomize function to start sequence
    randomize();
    // getSequence();
});

////Add click functionality to each button (<div>)
////make the buttons "light up" when selected/pushed
    ////maybe start with buttons at 50% opacity? click down = toggle to 100% on click/select? click up = then go back to 50%
$(".simon-button").mousedown(function(){
    $(this).css("opacity", "1");
}).mouseup(function(){
    $(this).css("opacity", ".45");
    ////record button clicked 
});

/////randomize button picks, math.random??

function randomize(){
    randomButtonValue = Math.floor((Math.random() * 4) + 1).toString();
    console.log (randomButtonValue);
    getSequence();
};
    ////would need number associated with each button. assign a value? difference between data-value and value attribute in HTML
    ////add each new random button pick to the end of the sequence and save the new sequence
function getSequence(){
    givenSequence.push(randomButtonValue);
    console.log (givenSequence);
    playSequence();
        // if (givenSequence == userSequence){
        //     randomize();  
        // } else {
        //     alert("nope. start over.");
        //     givenSequence = [];
        // };
};

function playSequence(){
    givenSequence.forEach(function(givenValue, index){
        setTimeout(function(){
            console.log(givenValue);
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
    
};




////need to compare given sequence to buttons pushed - if match, keep going. no match - start over
    ////keep track of how many sequences (rounds) have been completed









// })();