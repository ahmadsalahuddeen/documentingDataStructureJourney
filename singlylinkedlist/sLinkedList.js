class Node {
    constructor(val){
        this.val  = val;
        this.next = null;
    }
}

class sLinkedList {
    //constructor is a special function that invoke at the time of initialization of the object of this class 
    constructor(){
this.head = null;
this.length = 0;
this.tail  = null
    }
    push(value) {
        let newNode = new Node(value)
        if(!this.head ){
            this.head = newNode;
            this.tail = this.head

        }else{
             this.tail.next = newNode;
             this.tail = newNode
        }
        this.length++
        console.log('Stringified version: ',JSON.stringify(this, null, 4) );
console.log( this)
        return this;
    } 

    }

var list = new sLinkedList()
 list.push('hi')
 list.push('how ')
 list.push('are')