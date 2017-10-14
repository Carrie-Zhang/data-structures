var BinarySearchTree = function(value) {
  var newBinaryTree = {};
  newBinaryTree = _.extend(newBinaryTree, binaryTreeMethods);
  this.children = []; // 0/1/2 children
  this.left = this.children[0];
  this.right = this.children[1];
  this.value = value;
  this.numOfChildren = 0;
  // this.midPoint = value;
  
  return newBinaryTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value) {
//
  if (value < this.value) {
    // if (this.children.length === 0) {
    this.left = BinarySearchTree(value);
    this.children[0] = this.left;
    this.numOfChildren ++;
    // } 
  } 
  if (value > this.value) {
    // if (this.children.length === 0) {
    this.right = BinarySearchTree(value);
    this.children[1] = this.right;
    this.numOfChildren ++;
    // }
  }
  // if (this.children.length > 0) {
  for (var i = 0; i < this.numOfChildren; i++) {
    this.childern[i].insert(value);
  }
  // for (var i = 0; i < this.children.length; i++) {
  //   this.children[i].insert(value);
  // }
};
binaryTreeMethods.contains = function() {};
binaryTreeMethods.depthFirstLog = function() {};


/*
 * Complexity: What is the time complexity of the above functions?
 */
