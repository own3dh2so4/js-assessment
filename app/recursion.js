exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function getFiles(data, dirName) {
    var files = [];

    if (data.files) {
      for (var i in data.files) {
        if ( !data.files[i].files) {
          if ( !dirName || data.dir === dirName) {
            files.push( data.files[i]);
          }
        } else {
          files = files.concat(getFiles(data.files[i], data.dir === dirName ?
                      undefined : dirName));
        }
      }
    }
    return files;
  },

  permute: function permute(arr) {
    var perm = [];
    if ( arr.length === 0) {
      return [[]];
    }
    for (var i = 0; i < arr.length; i++ ) {
      var resto = arr.slice();
      var primer = resto.splice(i,1);
      var subPermutaciones = permute(resto);
      for ( var j = 0; j < subPermutaciones.length; j++) {
        perm.push(primer.concat(subPermutaciones[j]));
      }
    }
    return perm;
  },

  fibonacci: function fibonacci (n) {
    if (n < 3) {
      return 1;
    } else {
      return fibonacci(n-2) + fibonacci(n-1);
    }
  },

  validParentheses: function validParentheses (n) {
    if ( n === 0 ) {
      return [""];
    }

    var resultado = [];
    for ( var i = 0; i < n; ++i ) {
      var izq = validParentheses(i);
      var der = validParentheses( n - i - 1);

      for ( var j = 0; j < izq.length; ++j ) {
        for ( var k = 0; k < der.length; ++k) {
          resultado.push("(" + izq[j] + ")" + der[k]);
        }
      }
    }
    return resultado;
  }
};
