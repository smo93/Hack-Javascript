define(['jquery', 'handlebars'], function($, Handlebars) {
  var Render = {
    dimensionsInput: function(containerId) {
      var
        container = $(containerId),
        parseHtml = $('#dimensions-input').html();

      container.html(parseHtml);
    },
    matrix: function(containerId, tableId, data) {
      var
        container = $(containerId),
        parseHtml = $('#cell').html(),
        cellTemplate = Handlebars.compile(parseHtml),
        matrixTable = $('<table class="table table-bordered" id=' + tableId + '></table>');

      data.forEach(function(row, i) {
        var newTr = $('<tr></tr>');

        row.forEach(function(cell, j) {
          var newCell = $('<td></td>');
          newCell.append(cellTemplate({
            value : cell,
            row : i,
            col : j
          }));
          newTr.append(newCell);
        });
        matrixTable.append(newTr);
      });

      container.html(matrixTable);
    }
  };

  return Render;
});
