exports = (typeof window === 'undefined') ? global : window;

exports.modulesAnswers = {
  createModule : function(str1, str2) {
    var module = (function (my){
      my = {};
      my.name = str2;
      my.greeting = str1;
      my.sayIt = function () {
        return this.greeting + ', ' + this.name;
      }
      return my;
    } (module) );
    return module;
  }
};
