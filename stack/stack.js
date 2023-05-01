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
        newNode = new Node(value)
if(!this.start){
this.start = newNode
this.end = newNode

    }else{
        temp = this.start
        this.start = newNode
        this.start.next = temp

    }
    return ++this.length
}

pop(){
    temp = this.first.value
    if(this.first = null) return null
    if(this.first === this.end){
        this.end = null
    }
    this.first = this.first.next
    this.length--
return temp
}

}