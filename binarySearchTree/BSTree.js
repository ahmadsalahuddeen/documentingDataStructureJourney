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
        if(value < currentNode.value){
            if(currentNode.left === null){
                currentNode.left = newNode;
                return this;
            }else{
                currentNode = currentNode.left
            }

        }else if(value > currentNode.value){
            if(currentNode.right == null){
                currentNode.right = newNode
                return this;
            }else{
                currentNode = currentNode.right;
                
            }
        }
      }
    }
  }
}
