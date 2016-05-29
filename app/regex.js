exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    var regexNumber = /\.*\d.*/;
    return regexNumber.test(str);
  },

  containsRepeatingLetter : function(str) {
    var repeatedCharacter = /([a-zA-Z])\1{1,}/;
    return repeatedCharacter.test(str);
  },

  endsWithVowel : function(str) {
    var endWithVowels = /[aeiou]$/i;
    return endWithVowels.test(str);
  },

  captureThreeNumbers : function(str) {
    var treeNumbers = /[0-9]{3}/;
    var arrayNumbers = treeNumbers.exec(str);
    return arrayNumbers ? arrayNumbers[0] : false;
  },

  matchesPattern : function(str) {
    var phoneNumber = /^\d{3}-\d{3}-\d{4}$/;
    return phoneNumber.test(str);

  },
  isUSD : function(str) {
    var validMoney = /^\$[0-9]{1,3}(?:,?[0-9]{3})*(?:\.[0-9]{2})?$/
    return validMoney.test(str);

  }
};
