class Heap {
    constructor(){
        this.values = [41, 39, 33, 18, 27, 12]
    }

    insert(value){
this.values.push(value)
this.sort(value)
    }
    sort(value){
let numberToInsert = value
 let    currentIndex = this.values.length -1
    while(currentIndex > 0){
        let parentIndex = Math.floor((currentIndex -1)/2)
        let parentValue = this.values[parentIndex]
        if(this.values[parentIndex] <= this.values[currentIndex] ) break;
        
        this.values[currentIndex] = parentValue
        this.values[parentIndex] = numberToInsert
        currentIndex = parentIndex 
        console.log(this.values)
    }


    }
}


let heap = new Heap()

heap.insert(1)