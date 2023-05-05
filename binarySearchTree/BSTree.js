class Node {
    constructor(value){
        this.value = value
        this.right  = null
        this.left = null    
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null
    }

    insert(value){
    let newNode = new Node(value)
        while(true){
            if(this.root === null){
                this.root = newNode;
                return this;
            }
}
    }


}