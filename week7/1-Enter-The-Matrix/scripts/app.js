require.config({
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery',
    'handlebars': '../bower_components/handlebars/handlebars'
  },
  shim: {
    'handlebars': {
      exports: 'Handlebars'
    }
  }
});



require(['jquery', 'matrix', 'matrixoperation', 'render'], function($, Matrix, MatrixOperations, Render) {
  function setUpOperation(operation, dimensions) {
    var
      container = $('#main-area'),
      M1, M2;

    container.empty();
    $('#result-area').empty();

    switch (operation) {
      case 'add':
        M1 = new Matrix(dimensions[0], dimensions[1]);
        M2 = new Matrix(dimensions[0], dimensions[1]);


        container.append([
          '<div class="row">',
          '<div class="col-md-6" id="M1"></div>',
          '<div class="col-md-6" id="M2"></div>',
          '</div>',
          '<div class="row">',
          '<div class="col-md-12 text-center">',
          '<button class="btn btn-primary" id="add">Add</button>',
          '</div></div'
        ].join('\n'));

        Render.matrix('#M1', 'm1', M1.getData());
        Render.matrix('#M2', 'm2', M2.getData());

        $('#add').on('click', function() {
          M1 = tableToMatrix('#m1');
          M2 = tableToMatrix('#m2');

          $('#result-area').html([
            '<hr>',
            '<h3>',
            'Result:<br>',
            MatrixOperations.add(M1, M2).toString(),
            '</h3>',
          ].join('\n'));
        });
        break;

      case 'scale':
        M1 = new Matrix(dimensions[0], dimensions[1]);

        container.empty();

        container.append([
          '<div class="row">',
          '<div class="col-md-6 col-md-offset-3" id="M1"></div>',
          '</div>',
          '<div class="row">',
          '<div class="col-md-2 col-md-offset-5 text-center">',
          '<div class="input-group">',
          '<span class="input-group-addon">Scalar</span>',
          '<input type="number" class="form-control" id="scalar" value="0">',
          '</div>',
          '<br><button class="btn btn-primary" id="scale">Multiply by scalar</button>',
          '</div>',
          '</div>',
        ].join('\n'));

        Render.matrix('#M1', 'm1', M1.getData());

        $('#scale').on('click', function() {
          var scalar = parseInt($('#scalar').val());

          M1 = tableToMatrix('#m1');

          $('#result-area').html([
            '<hr>',
            '<h3>',
            'Result:<br>',
            MatrixOperations.scalarMult(scalar, M1).toString(),
            '</h3>'
          ].join('\n'));
        });
        break;

      case 'multiply':
        M1 = new Matrix(dimensions[0], dimensions[1]);
        M2 = new Matrix(dimensions[1], dimensions[0]);

        container.empty();

        container.append([
          '<div class="row">',
          '<div class="col-md-6" id="M1"></div>',
          '<div class="col-md-6" id="M2"></div>',
          '</div>',
          '<div class="row">',
          '<div class="col-md-12 text-center">',
          '<button class="btn btn-primary" id="multiply">Multiply</button>',
          '</div></div'
        ].join('\n'));

        Render.matrix('#M1', 'm1', M1.getData());
        Render.matrix('#M2', 'm2', M2.getData());

        $('#multiply').on('click', function() {
          M1 = tableToMatrix('#m1');
          M2 = tableToMatrix('#m2');

          $('#result-area').html([
            '<hr>',
            '<h3>',
            'Result:<br>',
            MatrixOperations.multiply(M1, M2).toString(),
            '</h3>',
          ].join('\n'));
        });
        break;

      case 'transpose':
        M1 = new Matrix(dimensions[0], dimensions[1]);

        container.empty();

        container.append([
          '<div class="row">',
          '<div class="col-md-6 col-md-offset-3" id="M1"></div>',
          '</div>',
          '<div class="row">',
          '<div class="col-md-2 col-md-offset-5 text-center">',
          '<button class="btn btn-primary" id="transpose">Transpose</button>',
          '</div>',
        ].join('\n'));

        Render.matrix('#M1', 'm1', M1.getData());

        $('#transpose').on('click', function() {
          M1 = tableToMatrix('#m1');

          $('#result-area').html([
            '<hr>',
            '<h3>',
            'Result:<br>',
            MatrixOperations.transpose(M1).toString(),
            '</h3>'
          ].join('\n'));
        });

        break;
    }
  }

  function tableToMatrix(tableId) {
    var
      table = $(tableId),
      data = [];

    table.find('tr').each(function() {
      $(this).find('td').each(function() {
        var
          cell = $(this).find('input'),
          i = parseInt(cell.data('row')),
          j = parseInt(cell.data('col'));

        if(typeof data[i] === 'undefined') { data[i] = []; }

        data[i][j] = parseInt(cell.val());
      });
    });

    return MatrixOperations.createFromArray(data);
  }

  Render.dimensionsInput('#main-area');
  $('#create-matrix').on('click', function() {
    var
      n = parseInt($('#rows').val()),
      m = parseInt($('#columns').val());

    setUpOperation($('#operation').val(), [n, m]);

    $('#operation').removeAttr('disabled');

    $('#operation').on('change', function() {
      setUpOperation($(this).val(), [n, m]);
    });
  });
});
