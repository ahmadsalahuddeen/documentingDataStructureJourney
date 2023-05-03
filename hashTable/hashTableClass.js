class HashTable {
    constructor(size =53){
        this.keyMap = new Array(size)
    }

_hash(key){
let total = 0
let WIERD_PRIME = 11

for(let i=0; i< Math.min(key.length, 100); i++){
    let char = key[i]
    let  value = char.charCodeAt(char)
    total = (total *  WIERD_PRIME + value ) % this.keyMap.length
}
return total

}

set(key, value){
    let index = this._hash(key)

    if(!this.keyMap[index]){
        this.keyMap[index] = []
    }
    this.keyMap[index].push([key, value])

}
}

let table = new HashTable()

table.set('name', 'salahuddeen')
table.set('name', 'salahuddeen')
table.set('name', 'salahuddeen')