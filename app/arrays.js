exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    var sum = 0;
    for ( var i in arr ) {
      sum += arr[i];
    }
    return sum;
  },

  remove : function(arr, item) {
    var numElements = arr.length;
    for ( var i = numElements; i >= 0; i-- ) {
      if ( arr[i] === item ) {
        arr.splice(i,1);
      }
    }
    return arr;
  },

  removeWithoutCopy : function(arr, item) {
    var numElements = arr.length;
    for ( var i = numElements; i >= 0; i-- ) {
      if ( arr[i] === item ) {
        arr.splice(i,1);
      }
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.splice(0,1);
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index,0,item)
    return arr;
  },

  count : function(arr, item) {
    var count = 0;
    for (var i in arr) {
      if (arr[i] === item) {
        count++;
      }
    }
    return count;
  },

  duplicates : function(arr) {
    var duplicados = [];
    arr.sort();
    for ( var i = 0; i < arr.length - 1; i++ ) {
      if ( duplicados.indexOf(arr[i]) === -1 ) {
        if ( arr[i] === arr[i+1]) {
          duplicados.push(arr[i]);
          i++;
        }
      }
    }
    return duplicados;
  },

  square : function(arr) {
    for ( var i in arr ) {
      arr[i] *= arr[i];
    }
    return arr;
  },

  findAllOccurrences : function(arr, target) {
    var positionOccurrences = [];
    for (var i in arr) {
      if ( arr[i] === target ) {
        positionOccurrences.push(i);
      }
    }
    return positionOccurrences;
  }
};
