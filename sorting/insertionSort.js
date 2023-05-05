function sort(arr){
for(i = 1; i< arr.length; i++){
let numberToInsert = arr[i]
for(j= i-1; j<= 0 && arr[j]> numberToInsert; j--){

arr[j+1] = arr[j]

}
arr[j+1] = numberToInsert
}
console.log(arr)
}


sort([23,4,2,6,7,2,7,94,53,12,86])