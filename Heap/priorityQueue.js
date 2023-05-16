class PriorityQueue {
    constructor() {
      this.value = [];
    }
  
    enqueue(value, priority) {
        let newNode = new Node(value, priority)
      this.value.push(newNode);
      this.bubbleup(newNode);

    }
    bubbleup(valueToInsert) {
      let idx = this.value.length - 1;
      while (idx > 0) {
        let parentIdx = Math.floor((idx - 1) / 2);
        let parentValue = this.value[parentIdx];
        if (valueToInsert.priority >= parentValue.priority) break;
        this.value[parentIdx] = valueToInsert;
        this.value[idx] = parentValue;
        idx = parentIdx;
      }
    }
  
    //extract max/ delete
  
    dequeue() {
  
      let idx = 0;
      let max = this.value[0]
      let element = this.value.pop();
      this.value[0] = element;
      let length = this.value.length ;
      while (true) {
        let leftChildIndex = 2 * idx + 1;
        let rightChildIndex = 2 * idx + 2;
        let leftValue, rightValue;
        let swap = null;
        if (leftChildIndex < length) {
          leftValue = this.value[leftChildIndex];
          if (leftValue.priority < element.priority) {
            swap = leftChildIndex;
          }
        }
        if (rightChildIndex < length) {
            rightValue = this.value[rightChildIndex];
            if (
                swap !== null && rightValue.priority < leftValue.priority ||
                swap === null && rightValue.priority < element.priority
                ) {
  
            swap = rightChildIndex;
          }
        }
  
        if (swap === null) break;
        this.value[idx] = this.value[swap];
        this.value[swap] = element;
        idx = swap;
      }
      console.log('Deleting '+ max)
  
    }
  print(){
    console.log(this.value)
  }
  }

  class Node {
    constructor(value, priority){
this.value = value;
this.priority = priority
    }
  }
  
  let pQueue = new PriorityQueue();
   

  pQueue.enqueue('hi', 5)
  pQueue.enqueue('two', 2)
  pQueue.enqueue('one', 1)
  pQueue.enqueue('fifty', 53)
  pQueue.dequeue()
  pQueue.dequeue()
  pQueue.print()

  