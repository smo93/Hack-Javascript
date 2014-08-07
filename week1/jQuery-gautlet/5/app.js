$(document).ready(function() {
    var randomNumber,
        init,
        userInput;

    init = function() {
        randomNumber = Math.floor(Math.random() * 10000).toString();
        userInput = "";
        $("h1 span").text(randomNumber);
        $("#user-input").text(userInput);
    };

    init();

    $("button").on("click", function() {
        if($(this).hasClass("btn-warning")) {
            userInput = userInput.slice(0, userInput.length - 1);
        } else {
            userInput += $(this).text();
            if(userInput === randomNumber) {
                alert("You win!");
                init();
            }
        }
        $("#user-input").text(userInput);
    });
});
