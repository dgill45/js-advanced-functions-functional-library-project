 
 const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {

      const newCollection = (collection instanceof Array)? collection.slice(): Object.values(collection)

      for (var i = 0; i < newCollection.length; i++ ){
          callback(newCollection[0])   
      }
      return(collection);
    },
  
    map: function (collection, callback) {
      let returnValue;
    
      if (Array.isArray(collection)){
      returnValue = [];
        for (let i = 0; i < array.length; i++){
          const newValue = callback(collection[i], i, collection)
          returnValue.push(newValue)
        }

      } else if(typeof collection === 'object'){
      
        for (let key in collection){
          const newValue = callback(collection[key], key, collection)
          return returnValue[key] = newValue;
        }
      }
      return returnValue;
      
    },

    reduce: function(collection, callback, acc) {
      let collect = collection.slice()
        if (!acc){
          acc = collection[0]
          collect = collection.slice[1]
        }
        let len = collection.length;
        
        for (let i = 0; i < len; i++){
           acc = callback(acc, collection[i], collection);
        } 
         return acc
    },

    find: function(collection, predicate){

      if (!(collection instanceof Array)){
        collection = Object.values(collection)

        for (var i = 0; i < collection.length; i++){
          if (predicate(collection[i])) 
          return collection[i]
        }
        return undefined;
      }

    },

    filter: function(collection, predicate) {
      if (!(Array.isArray(collection))){
        collection = Object.values(collection)
      }
      const newArr = []

      for (let i = 0; i < collection.length; i++){
        if (predicate(collection[i])) newArr.push(collection(i))
      }
      return newArr
    },


  }
}

fi.libraryMethod()
