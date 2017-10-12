var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    // list[value] = node;
    var currentNode = list.tail;

    if (!list.head && !list.tail) {
      list.head = node;
      list.tail = node;
    } else {
      list.tail = node;
      currentNode.next = node;
    }
  };

  list.removeHead = function() {
    var node = list.head;
    list.head = node.next;
    return node.value;
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
