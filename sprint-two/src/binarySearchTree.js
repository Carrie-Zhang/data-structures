var BinarySearchTree = function(value) {
  var newBinaryTree = {};
  
  newBinaryTree.left = null;
  newBinaryTree.right = null;
  newBinaryTree.value = value;
 
  newBinaryTree = _.extend(newBinaryTree, binaryTreeMethods);
  
  return newBinaryTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value) {
  var node = BinarySearchTree(value);
  var currentNode = this;

  if (value < currentNode.value) {
    if (currentNode.left === null) {
      currentNode.left = node;
    } else {
      currentNode.left.insert(value);
    }
  }
  if (value > currentNode.value) {
    if (currentNode.right === null) {
      currentNode.right = node;
    } else {
      currentNode.right.insert(value);
    }
 }
};
binaryTreeMethods.contains = function(value) {
  var currentNode = this;

  if (value === currentNode.value) {
    return true;
  }
  if (value < currentNode.value) {
    if (currentNode.left !== null) {
      return currentNode.left.contains(value);
    }
  }
  if (value > currentNode.value) {
    if (currentNode.right !== null) {
      return currentNode.right.contains(value);
    } 
  }
  return false;
};
binaryTreeMethods.depthFirstLog = function(callback) {
  var currentNode = this;
  callback(currentNode.value);
  if (currentNode.left !== null) {
    currentNode.left.depthFirstLog(callback);
  } 
  if (currentNode.right !== null) {
    currentNode.right.depthFirstLog(callback);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(logn)
 * contains: O(logn)
 * depthFirstLog: O(n)
 */
