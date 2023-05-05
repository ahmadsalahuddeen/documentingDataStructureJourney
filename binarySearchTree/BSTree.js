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
            console.log(JSON.stringify(this, null, 4));

            return this;
          } else {
            currentNode = currentNode.left;
          }
        } else if (value > currentNode.value) {
          if (currentNode.right == null) {
            currentNode.right = newNode;
            console.log(JSON.stringify(this, null, 4));

            return this;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
  }
  find(value){
if(this.root === null) return console.log('root is null')
let currentNode = this.root
let found = false
while(!found && currentNode){
if(value < currentNode.value){
    currentNode = currentNode.left;

}else if(value > currentNode.value){
    currentNode = currentNode.right
}else{
    found = true
    return console.log('found:'+ currentNode.value )
}

}
return console.log('cant find the value')

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


tree.find(5)
