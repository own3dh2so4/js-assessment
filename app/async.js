exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    var p = new Promise(
      function (resolve, reject) {
        resolve(value);
      }

    );
    return p;
  },


  manipulateRemoteData : function(url) {
    var p = new Promise(
      function (resolve, reject) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (xhttp.readyState == 4 && xhttp.status == 200) {
            var names = JSON.parse(xhttp.responseText);
            names = names.people;
            names = names.map( function ( persona) {
              return persona.name;
            });
            resolve(names.sort());
          }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
      }
    );
    return p;
  }
};
