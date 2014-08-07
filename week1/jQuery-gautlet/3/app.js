$(document).ready(function() {
    var removeImg = function() {
        this.remove();
    };

    $("#search-button").on("click", function() {
        var url = $("#search-input").val(),
            img = $("<img src=\"" + url + "\" />");
        img.error(function() {
            alert("Invalid url!");
        });
        img.load(function() {
            img.on("click", removeImg);
            $("div.container").append(img);
        });
    });
});
