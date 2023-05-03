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


get(key){
    let index = this._hash(key)
    for(let i=0; i< this.keyMap[index]?.length; i++){  //optional chaining, instead of  if case conditioning if theres is no item (trying to documnet and comment, WTH am i writing )
        if(this.keyMap[index][i][0] === key){
return this.keyMap[index][i][1]
        }   
             return undefined;
    }

}


}

let table = new HashTable()

table.set('salahuddeen', '19')
table.set('joe', '20')
table.set('zoel', '30')
table.set('baby', 'just born')
console.log( table.get('joe'))

