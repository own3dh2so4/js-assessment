exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var timeoutID;
    var contador = start;
    function cuenta() {
      console.log(contador++);
      if ( contador <= end ) {
        timeoutID = setTimeout(cuenta,100);
      }
    }
    cuenta();
    function cancelaCuenta() {
      if (timeoutID) {
        clearTimeout(timeoutID);
      }
    }
    var retContador = {
      cancel : cancelaCuenta
    }

    return retContador;
  }
};
