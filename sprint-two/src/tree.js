var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree = _.extend(newTree, treeMethods);
  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var output = false;
  var rec = function (node) {
    if (node.value === target) {
      return true;
    }
    if (node.children.length > 0) {
      for (var i = 0; i < node.children.length; i++) {
        output = rec(node.children[i]);
      }
    }
    return output;
  };

  return rec(this);

  // var rec = function() {
  //   if (this.value === target) {
  //     return true;
  //   } 
  //   for (var i = 0; i < this.children.length; i++) {
  //       // if (this.children[i].value === target) {
  //       //   output = true;
  //       // }
  //     rec(this.children[i]);//.contains(target);
  //   } 
  //   return false;
  // }  
  // rec(this);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
