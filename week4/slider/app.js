google.load('search', '1');

$(document).ready(function() {
    var searchQuery = window.location.search.replace('?', '').split('='),
        curPicInd = 0,
        curPage = 0;

    function renderPic() {
        var container = $('#img-prev'),
            result = imageSearch.results[curPicInd];

        container.find('#res-img').prop('src', result.unescapedUrl);
        console.log('1');
    }

   var imageSearch = new google.search.ImageSearch();

   imageSearch.setNoHtmlGeneration();

    imageSearch.setSearchCompleteCallback(
        this,
        function() {
            renderPic();
            console.log(imageSearch.cursor.pages);
            $('#left').off('click').on('click', function() {
                if(curPicInd > 0) {
                    curPicInd -= 1;
                } else if(curPage > 0) {
                    curPage -= 1;
                    imageSearch.gotoPage(curPage);
                    curPicInd = imageSearch.results.length - 1;
                    return;
                }

                renderPic();
            });
            $('#right').off('click').on('click', function() {
                if(curPicInd < imageSearch.results.length - 1) {
                    curPicInd += 1;
                    console.log(curPicInd);
                } else if(curPage < imageSearch.cursor.pages.length - 1) {
                    curPage += 1;
                    console.log(curPage);
                    imageSearch.gotoPage(curPage);
                    console.log(imageSearch.results.length);
                    curPicInd = 0;
                    return;
                }

                renderPic();
            });
        },
        null);

    if(searchQuery && searchQuery[1]) {
        imageSearch.execute(searchQuery[1]);
        $('.search-form').hide();
        $('.image').show();
    } else {
        $('.image').hide();
        $('.search-form').show();
    }


});
