var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var tempVal;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[count] = value;
    count ++;
  };

  someInstance.pop = function() {
    count --;
    if (count < 0) {
      count = 0;
    }
    tempVal = storage[count];
    delete storage[count];

    return tempVal;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
