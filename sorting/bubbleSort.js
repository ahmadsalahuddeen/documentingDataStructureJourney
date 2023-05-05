function sort(arr){
for(i= arr.length ; i > 0; i--){

for(j=0; j< i -1; j++){
    if(arr[j]> arr[j+1]){
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
    }
}

}

console.log(arr)
}



sort([23,4,2,6,7,2,7,94,53,12,86])