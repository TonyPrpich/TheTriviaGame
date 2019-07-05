$(document).ready(function () {
    var count = 0;
    var time = 30;
    var isSelected = false;
    var ticker;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;


    var question = ["Which pitcher led the majors in complete games in the 2000’s?",
        "Which player has the most extra base hits in the World Series?", "Which player has the most career HR without winning an MVP?", "Which pitcher had only 31 wins at age 30?", "Which Pitcher holds the record for consecutive complete games?", "Who is baseball's chief officer?", "Who did not make the hall of fame on their first ballot?", "Who managed for the most seasons?"];
    var answer = ["Roy Halladay", "Mickey Mantle", "Joe Thome", "Phil Niekro", "Jack Taylor", "Joe Toree", "Craig Biggio", "Connie Mack"];


    var firstChoice = ["Roy Halladay", "Jim Thome", "Reggie Jackson", "Cy Young", "Aroldis Chapman", "Jim Thome", "Derek Jeter", "Dusty Baker"];

    var secondChoice = ["Cliff Lee", "Mickey Mantle", "Hank Aaron", "Roger Clemens", "Goose Gossage", "Rob Manfred", "Ken Griffey JR", "Terry Francona"];

    var thirdChoice = ["CC Sabathia", "Joe Torre", "Justin Verlander", "Nolan Ryan", "Clayton Kershaw", "Joe Maddon", "Max Scherzer", "Dave Roberts"];



    function showHolders() {
        $("#question-holder").show();
        $("#choice-holder-1").show();
        $("#choice-holder-2").show();
        $("#choice-holder-3").show();
        $("#choice-holder-4").show();
    }
    function hideHolders() {
        $("#question-holder").hide();
        $("#choice-holder-1").hide();
        $("#choice-holder-2").hide();
        $("#choice-holder-3").hide();
        $("#choice-holder-4").hide();
    }
    function hideResults() {
        $("#correct-holder").hide();
        $("#incorrect-holder").hide();
        $("#unanswered-holder").hide();
        $("#restart-holder").hide();
    }
    function displayQuestion() {
        hideResults();
        $("#answer-holder").hide();
        $("#image-holder").hide();
        $("#time-holder").show();
        showHolders();
        $("#question-holder").html(question[count]);
        $("#choice-holder-1").html(firstChoice[count]);
        $("#choice-holder-2").html(secondChoice[count]);
        $("#choice-holder-3").html(thirdChoice[count]);
        $("#choice-holder-4").html(fourthChoice[count]);


        $("#choice-holder-1").hover(function () {
            $(this).css("color", "gray");
        },
            function () {
                $(this).css("color", "black");
            });
        $("#choice-holder-2").hover(function () {
            $(this).css("color", "gray");
        },
            function () {
                $(this).css("color", "black");
            });
        $("#choice-holder-3").hover(function () {
            $(this).css("color", "gray");
        },
            function () {
                $(this).css("color", "black");
            });
        $("#choice-holder-4").hover(function () {
            $(this).css("color", "gray");
        },
            function () {
                $(this).css("color", "black");
            });
    }
    $("#choice-holder-1").on("click", checkAnswer)
    $("#choice-holder-2").on("click", checkAnswer)
    $("#choice-holder-3").on("click", checkAnswer)
    $("#choice-holder-4").on("click", checkAnswer)


    function checkAnswer() {

        hideHolders();

        if ($(this).text() === answer[count]) {
            stopTime();
            isSelected = true;
            $("#answer-holder").show();
            $("#answer-holder").html("Right! The answer is: " + answer[count]);
            displayImage();
            correct++;
            count++;
        }
        else {
            stopTime();
            isSelected = true;
            $("#answer-holder").show();
            $("#answer-holder").html("Wrong! The answer is: " + answer[count]);
            displayImage();
            incorrect++;
            count++;
        }

        checkGameEnd();
    }


    function checkGameEnd() {
        if (count === question.length) {
            $("#time-holder").hide();
            showResults();
            count = 0;
            $(".start").show();
            $(".start").on("click", function () {
                resetResults();
                startGame();
            });
        }
    }

    function resetTime() {
        time = 31;
    }

    function displayTime() {
        time--;
        $("#time-holder").html("Time remaining: " + time);

        if (time <= 0) {
            hideHolders();
            stopTime();
            $("#answer-holder").show();
            $("#answer-holder").html("Time is up! The answer is: " + answer[count]);
            displayImage();
            unanswered++;
            count++;
            checkGameEnd();
        }
    }

    function startTime() {
        clearInterval(ticker);
        ticker = setInterval(displayTime, 1000);
    }
    function stopTime() {
        clearInterval(ticker);
        resetTime();
        if (count < question.length - 1) {
            setTimeout(startTime, 2000);
            setTimeout(displayQuestion, 3000);
        }
    }

    resetTime();


    function displayImage() {
        if (count === 0) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="/Users/tonyp_0002/Developer/uubc/sandbox/The_trivia_game/TheTriviaGame/assets/images/175562-004-8665C474.jpg">');
        }
        else if (count === 1) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="/Users/tonyp_0002/Developer/uubc/sandbox/The_trivia_game/TheTriviaGame/assets/images/MantleMickey.jpg">');
        }
        else if (count === 2) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="/Users/tonyp_0002/Developer/uubc/sandbox/The_trivia_game/TheTriviaGame/assets/images/download.jpeg">');
        }
        else if (count === 3) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="/Users/tonyp_0002/Developer/uubc/sandbox/The_trivia_game/TheTriviaGame/assets/images/download (1).jpeg">');
        }
        else if (count === 4) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="/Users/tonyp_0002/Developer/uubc/sandbox/The_trivia_game/TheTriviaGame/assets/images/WalterJohnson.jpg">');
        }
        else if (count === 5) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="/Users/tonyp_0002/Developer/uubc/sandbox/The_trivia_game/TheTriviaGame/assets/images/18s0p2zuyo5vfjpg.jpg">');
        }
        else if (count === 6) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="/Users/tonyp_0002/Developer/uubc/sandbox/The_trivia_game/TheTriviaGame/assets/images/usa-today-5169430.0.jpg">');
        }
        else if (count === 7) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="/Users/tonyp_0002/Developer/uubc/sandbox/The_trivia_game/TheTriviaGame/assets/images/MackConnie-LOC-Bain.jpg">');
        }
    }


    function showResults() {
        $("#correct-holder").show();
        $("#correct-holder").html("Correct: " + correct);
        $("#incorrect-holder").show();
        $("#incorrect-holder").html("Incorrect: " + incorrect);
        $("#unanswered-holder").show();
        $("#unanswered-holder").html("Unanswered: " + unanswered);
        $("#restart-holder").show();
        $("#restart-holder").html("Click Start above to play again!");
    }


    function resetResults() {
        correct = 0;
        incorrect = 0;
        unanswered = 0;
    }


    function startGame() {
        $(".start").hide();
        startTime();
        displayQuestion();
    }


    $(".start").on("click", function () {
        startGame();
    });
});












