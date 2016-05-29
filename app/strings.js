exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var string = str.charAt(0);
    var sameLetter = 1;
    for ( var i = 1; i < str.length; i++) {
      if ( string.charAt(string.length - 1 ) === str.charAt(i) ) {
        sameLetter++;
      } else {
        sameLetter = 1;
      }
      if ( sameLetter <= amount) {
        string += str.charAt(i);
      }
    }
    return string;
  },
  wordWrap: function(str, cols) {
    var result = "";
    var arraySplited = str.split(" ");
    var count = 0;
    for ( var i = 0; i < arraySplited.length - 1; i++ ) {
      result+=arraySplited[i];
      count+= arraySplited[i].length;
      if (count >= cols || arraySplited[i].length + arraySplited[i+1].length >= cols) {
        result += '\n';
        count = 0;
      } else {
        result += ' '
        count++;
      }
    }
    result += arraySplited[arraySplited.length - 1];
    return result;
  },
  reverseString: function(str) {
    //Creamos un array con cada letra del string
    //Damos la vuelta al arrays
    //Volvemos a construir el string
    return str.split("").reverse().join("");
  }
};
