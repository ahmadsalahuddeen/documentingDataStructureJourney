class Heap {
    constructor() {
      this.value = [];
    }
  
    insert(newVal) {
      this.value.push(newVal);
      this.bubbleup(newVal);
      console.log('inserting'+this.value);
    }
    bubbleup(valueToInsert) {
      let idx = this.value.length - 1;
      while (idx > 0) {
        let parentIdx = Math.floor((idx - 1) / 2);
        let parentValue = this.value[parentIdx];
        if (valueToInsert <= parentValue) break;
        this.value[parentIdx] = valueToInsert;
        this.value[idx] = parentValue;
        idx = parentIdx;
      }
    }
  
    //extract max/ delete
  
    deleteMax() {
  
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
          if (leftValue > element) {
            swap = leftChildIndex;
          }
        }
        if (rightChildIndex < length) {
            rightValue = this.value[rightChildIndex];
            if (
                swap !== null && rightValue > leftValue ||
                swap === null && rightValue > element
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
  
  }
  
  let heap = new Heap();
  

  