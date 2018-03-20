$(document).ready(function () {
    var copmGuess = (Math.floor(Math.random() * 102) + 19);
    var randNum1 = (Math.floor(Math.random() * 12) + 1);
    var randNum2 = (Math.floor(Math.random() * 12) + 1);
    var randNum3 = (Math.floor(Math.random() * 12) + 1);
    var randNum4 = (Math.floor(Math.random() * 12) + 1);
    var counter = 0;
    var win = 0;
    var losses = 0;
    $(".losses").html("Losses: " + losses);
    $(".win").html("Wins: " + win);

    $("#disCompGuees").html(copmGuess);


    $("#images").on("click", ".btn-img-1", function () {
        counter += randNum1
        $("#yourScore").html(counter);
        console.log(counter);
        checkCondition();
    }).on("click", ".btn-img-2", function () {
        counter += randNum2
        $("#yourScore").html(counter);
        console.log(counter);
        checkCondition();
    }).on("click", ".btn-img-3", function () {
        counter += randNum3
        console.log(counter);
        $("#yourScore").html(counter);
        checkCondition();

    }).on("click", ".btn-img-4", function () {
        counter += randNum4
        console.log(counter);
        $("#yourScore").html(counter);
        checkCondition();
    });
    function checkCondition() {
        if (counter === copmGuess) {
            $(".win").html("Wins: " + ++win);
            reset();
        }

        if (counter > copmGuess) {
            $(".losses").html("Losses: " + ++losses);
            reset();
        };

    };
    function reset() {
        copmGuess = (Math.floor(Math.random() * 102) + 19);
        randNum1 = (Math.floor(Math.random() * 12) + 1);
        randNum2 = (Math.floor(Math.random() * 12) + 1);
        randNum3 = (Math.floor(Math.random() * 12) + 1);
        randNum4 = (Math.floor(Math.random() * 12) + 1);
        counter = 0;

        $("#disCompGuees").html(copmGuess);
        $("#yourScore").html(counter);
    }

});