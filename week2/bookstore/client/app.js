$(document).ready(function() {
    var bookObjects = [],
        booksInCart = [],
        totalPages = 0;

    var bookTemplate = _.template(['<h3><%= title %></h3>',
                                   '<img src="<%= image_url %>">',
                                   '<p>Average rating: <%= average_rating %></p>',
                                   '<p>ISBN: <%= isbn %></p>',
                                   '<button class="btn btn-info" data-toggle="modal" data-target="#<%= id %>-modal">Read description</button><br/>',
                                   '<button class="btn btn-success">Add to Cart</button>'].join('\n')),
        modalTemplate = _.template(['<div class="modal fade" id="<%= id %>-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">',
                                    '<div class="modal-dialog">',
                                    '<div class="modal-content">',
                                    '<div class="modal-header">',
                                    '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>',
                                    '<h3><%= title %></h3>',
                                    '</div>',
                                    '<div class="modal-body">',
                                    '<p><%= description %></p>',
                                    '</div></div></div></div>'].join('\n'));

    function bookToHtml(book, modalFlag) {
        var bookHtml = $('<div class="col-xs-4" data-id="' + book.id + '"></div>');

        bookHtml.append(_.unescape(bookTemplate(book)));
        if(modalFlag) {
            bookHtml.append(_.unescape(modalTemplate(book)));
        }

        return bookHtml;
    }

    function updateCart() {
        console.log('updating cart');
        var cart = $('#cart');

        cart.empty();

        cart.append('<h3 id="totalPageNumber">Total number of pages in Cart: ' + totalPages + '</h3>');

        booksInCart.forEach(function(book, i) {
            if(i % 3 === 0) {
                cart.append('<div class="row"></div>');
            }

            var currentBook = cart.find('.row').last().append(bookToHtml(book, false));
            currentBook.find('.btn-success').removeClass('btn-success').
                addClass('btn-warning').text('Remove from Cart');
        });
    }

    function hookRemoveBtns() {
        $('.btn-warning').on('click', function() {
            var currentId = $(this).parent().data('id'),
                currentBook = bookObjects.filter(function(book) {
                    return book.id === currentId;
                })[0];


            totalPages -= currentBook.num_pages;
            console.log(totalPages);
            booksInCart = booksInCart.slice(0, booksInCart.indexOf(currentBook)).concat(booksInCart.slice(booksInCart.indexOf(currentBook) + 1, booksInCart.length));
            

            $(this).parent().remove();

            $('#totalPageNumber').text('Total number of pages in Cart: ' + totalPages);
        });
    }

    var idGenerator = (function() {
        var count = 0;

        return (function() {
            count += 1;
            return count;
        });
    } ());

    $.getJSON('http://localhost:3000/books', function(data) {
        var booksContainer = $('#books');

        bookObjects = data;

        bookObjects.forEach(function(book, i) {
            if(i % 3 === 0) {
                booksContainer.append('<div class="row"></div>');
            }

            for (var j in bookObjects[i]) {
                bookObjects[i][j] = $(document.createElement('div')).html(bookObjects[i][j]).text();
                if (j === 'num_pages') {
                    bookObjects[i][j] = parseInt(bookObjects[i][j]);
                }
            }



            bookObjects[i].id = idGenerator();
            booksContainer.find('.row').last().append(bookToHtml(book, true));
        });

        $('.btn-success').on('click', function() {
            var button = $(this),
                currentId = button.parent().data('id'),
                currentBookObj = bookObjects.filter(function(b) {
                    return b.id === currentId;
                })[0];

            booksInCart.push(currentBookObj);
            console.log(booksInCart);
            totalPages += currentBookObj.num_pages;

            updateCart();
            hookRemoveBtns();
        });
    });
});
