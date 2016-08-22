"use strict"

$(document).ready(function(){

//////////////////////////////////global variables////////////////////////////////

    var givenSequence = [];
    var randomButtonValue = '';
    var i = 0;
    var round = 1;
    var buttonTrigger = false;

///////////////////////////////////start button///////////////////////////////////

    $("#start").click(function(e){
        givenSequence = [];
        i = 0;
        round = 1;
        randomize(); 
        givenSequence.push(randomButtonValue);
        console.log (givenSequence);
        $("#start").hide();
        $('.round').html('<h2>' + "Round: " + round + '</h2>');
        playSequence();
    });


////////////////////////////////////button light up function////////////////////////////////
    ////make the buttons "light up" when selected/pushed
        ////maybe start with buttons at 50% opacity? click down = toggle to 100% on click/select? click up = then go back to 50%
    function lightUp(value) {
        $('[data-value=' + (value) + ']').animate({
            'opacity': '1'
        }, 500).animate({
            'opacity': '.45'
        }, 0);
    };

//////////////////////////////////////randomize button picks/////////////////////////////////
    /////randomize button picks, math.random??

    function randomize(){
        randomButtonValue = Math.floor((Math.random() * 4) + 1).toString();
        return randomButtonValue;
    };
        ////would need number associated with each button. assign a value? difference between data-value and value attribute in HTML

///////////////////////////////////////starts a new round////////////////////////////////////    

    function newRound() {
        randomize();
        givenSequence.push(randomButtonValue);
        console.log (givenSequence);
        setTimeout(function(){
            playSequence();
        }, 500);
        round += 1;
        $('.round').html('<h2>' + "Round: " + round + '</h2>');
    };

//////////////////////////////////plays the simon sequence////////////////////////////////////////

    function playSequence(){
        givenSequence.forEach(function(element, index){
            setTimeout(function(){
                lightUp(element);
            }, (500 * index));

        });
        setTimeout(function(){
            buttonTrigger = true;
        }, (500 * (givenSequence.length)));
    };

////////////////////////////////compares button clicks to simon sequence/////////////////////////

    $(".simon-button").click(function(){
        if (buttonTrigger) {
            lightUp($(this).data('value'));
            if (givenSequence[i] == $(this).data('value')){
                i += 1;
                console.log("yes.");
            } else {
                i = 0; 
                alert ("button fail. click start to retry.");
                buttonTrigger = false;
                round = 1;
                $('#start').show();
            };

            if (i == givenSequence.length) {
                buttonTrigger = false;
                console.log ("yes. reset.");
                i = 0;
                newRound();
            };
        };
    });

});






















