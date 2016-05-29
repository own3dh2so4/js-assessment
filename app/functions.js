exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(null,arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    return function(str1) {
      return str + ", " + str1;
    };
  },

  makeClosures : function(arr, fn) {
    var functions = [];

    for ( var i in arr ) {
      functions.push(
          function (number) {
            return function (){
              return fn(number);
            }
          }(arr[i])
      )
    }

    return functions;
  },

  partial : function(fn, str1, str2) {
    /*return function ()
        {
          fn.apply(null, [str1, str2]);
        }
    */
    //http://www.drdobbs.com/open-source/currying-and-partial-functions-in-javasc/231001821
    return function (variable) {
      return fn(str1,str2,variable);
    }
  },

  useArguments : function() {
    // Esto esta bien?
    var sumaTotal = 0;
    for (var i in arguments) {
      sumaTotal += arguments[i];
    }
    return sumaTotal;
  },

  callIt : function(fn) {
    var args = [];
    for ( var i = 1; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    return fn.apply(this, args);
  },

  partialUsingArguments : function(fn) {
    var args = [];
    for ( var i = 1; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    return function () {
      var myArgs = [];
      for ( var i = 0; i < arguments.length; i++) {
        myArgs.push(arguments[i]);
      }
      return fn.apply(null, args.concat(myArgs));
    }
  },

  curryIt : function curryIt(fn) {
    //con esta closure vamos guardando los argumentos
    var argumentos = [];
    //vamos a trabajar siempre con los argumentos de uno en uno
    return function curry(a) {
      //lo primero es añadir el parameto a la lista de argumentos
      argumentos.push(a);
      //si los tenemos todos:
      return fn.length <= argumentos.length ?
        //ejecutamos
        fn.apply(null, argumentos) :
        // si no nos devolvemos a nosotros mismos
        curry;
    }


    /*
    //Forma mas top de hacerlo, pero no vale para el test, ya que obliga a que se pasen de uno en uno los parametros:
    return function curried () {
      //Esto permite que se puedan pasar mas de un argumento de golpe al curry
      var argumentos = [].slice.call(arguments);
            // si ya tenemos todos los argumentos que necesita la funcion
      return argumentos.length >= fn.length ?
            // llamamos a la funcion con estos argumentos
            fn.apply(null, argumentos) :
            // si no preparamos la llamada con los argumentos que hemos recogido
            function () {
              var resto = [].slice.call(arguments);
              return curried.apply(null, argumentos.concat(resto));
            }

    }
    */
  }
};
