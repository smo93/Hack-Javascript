$(document).ready(function() {
    var paragraphs = $("#mightyParagraphHolder").find("p"),
        currentP = paragraphs.first();
    $("button").on("click", function() {
        paragraphs.removeClass("highlight");
        currentP.addClass("highlight");

        if(currentP.hasClass("third")) {
            currentP = paragraphs.first();
        } else {
            currentP = currentP.next();
        }
    });
});
