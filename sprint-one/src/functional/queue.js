var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var tempVal;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[count] = value;
    count ++;
  };

  someInstance.dequeue = function() {
    tempVal = storage[0];
    count --;
    if (count < 0) {
      count = 0;
    }
    delete someInstance[0];
    for (var i = 0; i < count; i++) {
      storage[i] = storage[i + 1];
    }
    delete storage[count];
    return tempVal;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
