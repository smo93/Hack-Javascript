define(['matrix'], function(Matrix) {
  var MatrixOperations = {
    createFromArray : function(data) {
      var
        n = data.length,
        m = data[0].length,
        matrix = new Matrix(n, m);

      data.forEach(function(row, index) {
        matrix.setRow(index, row);
      });

      return matrix;
    },
    transpose : function(M) {
      var
        n = M.getN(),
        m = M.getM(),
        transposedM = new Matrix(m, n);

      M.getData().forEach(function(row, i) {
        transposedM.setCol(i, row);
      });

      return transposedM;
    },
    add : function(M1, M2) {
      var
        n = M1.getN(),
        m = M1.getM();
      if(n === M2.getN() && m === M2.getM()) {
        var sumM = new Matrix(n, m);

        var addRows = function(row1, row2) {
          return row1.map(function(cell, index) {
            return cell + row2[index];
          });
        };

        M1.getData().forEach(function(row, i) {
          var newRow = addRows(row, M2.getRow(i));

          sumM.setRow(i, newRow);
        });

        return sumM;
      }

      return false;
    },
    scalarMult : function(scalar, M1) {
      var
        n = M1.getN(),
        m = M1.getM(),
        scalM = new Matrix(n, m);

      var scaleRow = function(row) {
        return row.map(function(e) { return e * scalar; });
      };

      M1.getData().forEach(function(row, i) {
        scalM.setRow(i, scaleRow(row));
      });

      return scalM;
    },
    multiply : function(M1, M2) {
      var
        n = M1.getN(),
        m = M1.getM();

      if(n == M2.getM() && m == M2.getN()) {
        var
          multM = [],
          transM2 = this.transpose(M2).getData();

        var multRows = function(row1, row2) {
          var res = 0;

          for(var i = 0; i < row1.length; i++) {
            res += row1[i] * row2[i];
          }
          return res;
        };

        M1.getData().forEach(function(row1, i) {
          var newRow = [];

          transM2.forEach(function(row2) {
            newRow.push(multRows(row1, row2));
          });

          multM.push(newRow);
        });

        return this.createFromArray(multM);
      }

      return false;
    }
  };

  return MatrixOperations;
});
