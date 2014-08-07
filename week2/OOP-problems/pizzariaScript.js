$(document).ready(function() {
    var jobQueue = [],
        lastId = 0,
        total = 0,
        busy = false,
        updateHtml;

    updateHtml = function() {
        $('#number-jobs').text(jobQueue.length.toString());
        $('#last-id').text(lastId.toString());
        $('#total-cost').text(total.toString());
    };

    $('#start-btn').on('click', function() {
        $(this).text('Working!');
        setInterval(function() {
            setTimeout(function() {
                var price = Math.floor(Math.random() * 10 + 5),
                    timeToMake = Math.floor(Math.random() * 2000 + 2000),
                    newPizza = new Pizza('Pizza', price, timeToMake),
                    newOrder = new PizzaOrder(newPizza);

                jobQueue.push(newOrder);
                updateHtml();
            }, Math.floor(Math.random() * 20000));
        }, 2000);
    });

    setInterval(function() {
        if(!busy && jobQueue.length !== 0) {
            var pizzaInTheMaking = jobQueue.shift();
            pizzaInTheMaking.ready(function(p, o) {
                lastId = o.getId();
                total += p.cost;
                updateHtml();
                busy = false;
            });
            pizzaInTheMaking.start();
            busy = true;
        }
    }, 600);

});
