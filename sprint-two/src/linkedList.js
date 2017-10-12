var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.count = 0;

  list.addToTail = function(value) {
    var node = Node(value);
    // list[value] = node;
    list.tail = node;
    if (list.count === 0) {
      list.head = node;
    } else {
      list.head.next = node;
    }
    list.count ++;
  };

  list.removeHead = function() {
    var temp = list.head;
    delete list[list.head.value];
    list.head = list.head.next;
    list.count --;
    return temp.value;
  };

  list.contains = function(target) {
    var output = false;
    var node = list.head;
    while (node) {
      if (node.value === target) {
        output = true;
      }
      node = node.next;
    }
    return output;
  }; 

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
