

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.count = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      // bucket.splice(i, 1);
      var oldValue = tuple[1];
      tuple[1] = v;
      // bucket[i] = [k, v];
      return oldValue;
    }
  }
  bucket.push([k, v]);
  this._storage.set(index, bucket);
  this.count ++;
  
  // var count = 0;

  // for (var i = 0; i < this._limit; i++) {
  //   if ()
  // }

  if (this.count >= this._limit * 0.75) {
    // this._limit *= 2;
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);  
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
    }
  }

  // this.count --;

  // if (this.count >= this._limit * 0.75) {
  //   this._limit *= 2;
  // }
  // if (this.count <= this._limit * 0.25) {
  //   this._limit /= 2;
  // }
};

// input: a number, new limit of the hash table
// output: a new hash table
// compare the old hash table's limit with new limit
  // 
 HashTable.prototype.resize = function(newLimit) {
  var oldStroage = this._storage;
  newLimit = Math.max(newLimit, 8);
  
  this._storage = LimitedArray(this._limit);
  this._limit = newLimit;
  
  oldStroage.each(function(bucket) {
    for (var i = 0; i < bucket.length; i++) {
      
    }

  }).bind(this);

}; 



// var hashTable = new HashTable();

/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(1) O(n)
 * retrieve : O(n)
 * remove : O(n)
 */


