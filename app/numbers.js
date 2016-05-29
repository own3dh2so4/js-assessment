exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    var arrayBits = [];
    while ( num != 0 ) {
      arrayBits.push(num % 2);
      num = parseInt(num / 2, 10);
    }

    return arrayBits[bit - 1];
  },

  base10: function(str) {
    var arrayBits = str.split('');
    var suma = 0;

    arrayBits.reverse();
    for ( var i = 0; i< arrayBits.length; i++) {
      suma += arrayBits[i] * Math.pow(2,i);
    }
    return suma;
  },

  convertToBinary: function(num) {
    var arrayBits = [];
    while ( num != 0 ) {
      arrayBits.push(num % 2);
      num = parseInt(num / 2, 10);
    }
    while( arrayBits.length < 8 ){
      arrayBits.push(0);
    }
    arrayBits.reverse();
    return arrayBits.join("");
  },

  //este test no carga
  multiply: function(a, b) {
    function decimalPlaces(num) {
    var match = (''+num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    if (!match) { return 0; }
    return Math.max(
        0,
        // Number of digits right of decimal point.
        (match[1] ? match[1].length : 0)
        // Adjust for scientific notation.
        - (match[2] ? +match[2] : 0));
      }
    var total = a * b;
    return Number(total.toFixed(decimalPlaces(a) + decimalPlaces(b)));
  }
};
