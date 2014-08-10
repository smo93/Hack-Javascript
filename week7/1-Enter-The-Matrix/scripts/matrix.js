define(function() {
  return function Matrix(N, M) {
    if(!(this instanceof Matrix)) {
      return new Matrix(N, M);
    }

    var data = [];
    for(var i = 0; i < N; i++) {
      data[i] = [];
      for(var j = 0; j < M; j++) {
        data[i][j] = 0;
      }
    }

    this.getN = function() {
      return N;
    };

    this.getM = function() {
      return M;
    };

    this.getRow = function(index) {
      if(index >= 0 && index < N) {
        return data[index];
      }

      return false;
    };

    this.getCol = function(index) {
      if(index >= 0 && index < M) {
        return data.map(function(row) {
          return row[index];
        });
      }

      return false;
    };

    this.setRow = function(index, row) {
      if(index >= 0 && index <= N) {
        row.forEach(function(cell, i) {
          data[index][i] = cell;
        });
        return true;
      }

      return false;
    };

    this.setCol = function(index, col) {
      if(index >= 0 && index <= M) {
        col.forEach(function(cell, i) {
          data[i][index] = cell;
        });
        return true;
      }

      return false;
    };

    this.getAt = function(i, j) {
      return data[i][j];
    };

    this.setAt = function(i, j, value) {
      if(i >= 0 && i < N && j >= 0 && j < M) {
        data[i][j] = value;
        return true;
      }

      return false;
    };

    this.getData = function() {
      return data;
    };

    Matrix.prototype.toString = function() {
      return data.map(function(row) {
        return row.join('\t');
      }).join('<br>');
    };
  };
});
