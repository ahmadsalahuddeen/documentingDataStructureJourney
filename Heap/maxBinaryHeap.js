class Heap {
  constructor() {
    this.value = [41, 39, 33, 18, 27, 12];
  }

  insert(newVal) {
    this.value.push(newVal);
    this.bubbleup(newVal);
    console.log(this.value);
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
    let element = this.values.pop();
    this.value[0] = element;
    while (true) {
      let length = this.value.length - 1;
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
    }
  }
}

let heap = new Heap();

heap.insert(55);
