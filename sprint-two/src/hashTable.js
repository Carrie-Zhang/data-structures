

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // this._storage.get(index) = this._storage.get(index) || [];
  // var bucket = this._storage.get(index);
  // if (!bucket) {
  //   bucket.push(v);
  // }
  var bucket = this._storage.get(index) || [];
  
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
      // bucket[i] = [k, v];
    }
  }
  // this.remove(k);
  bucket.push([k, v]);
  this._storage.set(index, bucket);
  // var bucket = this._storage.get(index);
  
  //if (!bucket) {
    //this._storage.set(index, []);
    // bucket.push([k, v]);
  //}
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // var bucket = this._storage.get(index);
  // // for (var i = 0; i < bucket.length; i++) {
  //   return bucket;
  // }
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);  
  // delete this._storage.get(index);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
    }
  }
  
};

var hashTable = new HashTable();

/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(1) O(n)
 * retrieve : O(n)
 * remove : O(n)
 */


