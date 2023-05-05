class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value === currentNode.value) return undefined;
        if (value < currentNode.value) {
          if (currentNode.left === null) {
            currentNode.left = newNode;

            return this;
          } else {
            currentNode = currentNode.left;
          }
        } else if (value > currentNode.value) {
          if (currentNode.right == null) {
            currentNode.right = newNode;

            return this;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
  }

  find(value) {
    if (this.root === null) return console.log("root is null");
    let currentNode = this.root;
    let found = false;
    while (!found && currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        found = true;
        return console.log("found:" + currentNode.value);
      }
    }
    return console.log("cant find the value");
  }

BFS() {
    if (this.root === null) return console.log("tree is empty");

    let queue = [];
    let data = [];
    let node;
    queue.push(this.root);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);

      if (node.right) queue.push(node.right);
      if (node.left) queue.push(node.left);
    }
    return console.log("All data: " + data);
  }

  DFSPreOrder() {
    let data = [];

    function travers(node) {
      data.push(node.value);

      if (node.left) travers(node.left);
      if (node.right) travers(node.right);
    }

    travers(this.root);
    return console.log(data)
  }
  DFSPostOrder() {
    let data = [];

    function travers(node) {
        
        if (node.left) travers(node.left);
        if (node.right) travers(node.right);
        data.push(node.value);
    }

    travers(this.root);
    return console.log(data)
  }
  DFSInOrder() {
    let data = [];

    function travers(node) {
        
        if (node.left) travers(node.left);
        data.push(node.value);
        if (node.right) travers(node.right);
    }

    travers(this.root);
    return console.log(data)
  }
}

let tree = new BinarySearchTree();

tree.insert(34);
tree.insert(98);
tree.insert(1);
tree.insert(23);
tree.insert(45);
tree.insert(45);
tree.insert(5);
tree.insert(1234);

tree.DFSPostOrder()
tree.DFSPreOrder()
tree.DFSInOrder()
