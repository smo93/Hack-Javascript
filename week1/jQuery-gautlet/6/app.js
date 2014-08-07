$(document).ready(function() {
    var allItems;

    $.getJSON("http://localhost:3000/items", function(items) {
        var newOption;

        allItems = items;

        allItems.forEach(function(item) {
            newOption = $("<option>" + item.name + "</option>");
            $("#left-list").append(newOption);
        });
    });

    var sortList = function(selector) {
        var options, arr;

        options = $(selector + " option");
        arr = options.map(function(_, o) { return $(o).text(); });
        arr = arr.sort();
        options.each(function(i, o) {
            $(o).text(arr[i]);
        });
    };

    $("#to-right").on("click", function() {
        var toMove = $("#left-list option:selected"),
            options, arr;

        toMove.detach();
        $("#right-list").append(toMove);
        $("option:selected").removeAttr("selected");

        sortList("#right-list");
    });

    $("#to-left").on("click", function() {
        var toMove = $("#right-list option:selected");

        toMove.detach();
        $("#left-list").append(toMove);
        $("option:selected").removeAttr("selected");

        sortList("#left-list");
    });
});
