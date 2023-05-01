class Node {
    constructor(value){
this.value = value
this.next = null
    }
}
 

class Stack {

    constructor(){
        this.start = null
        this.end = null
        this.length = 0
    }

    push(value){
     let   newNode = new Node(value)
if(!this.start){
this.start = newNode
this.end = newNode

    }else{
        var temp = this.start
        this.start = newNode
        this.start.next = temp

    }
    return ++this.length
}

pop(){
   var temp = this.start
    if(this.start === null) return null
    if(this.start === this.end){
        this.end = null
    }
    this.start = this.start.next
    this.length--
return temp.value
}

}


let stack = new Stack()

stack.push('hi')
stack.push('how')
stack.push('are')
stack.push('you')


stack.pop()


