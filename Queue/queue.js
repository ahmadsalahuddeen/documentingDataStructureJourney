class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}


class Queue {

constructor() {
    this.head = null
    this.tail = null
    this.size = 0

}

enqueue(value){
    var newNode = new Node(value)
    if(!this.head){
        this.head = newNode
        this.tail = newNode
    }else{
        this.tail.next = newNode
        this.tail = newNode
    }
    return ++this.size
}
dequeue(){
    let temp = this.head
    if (!this.head) return null;

    if (this.head === this.tail) {
        this.tail = null
    }
    this.head = this.head.next
    this.size--
return temp.value
}

}

let queue = new Queue();
console.log( queue.enqueue('hi'))
console.log( queue.enqueue('hi'))
console.log( queue.enqueue('hi'))
console.log( queue.dequeue())
