function sort (arr){

for(i = 0; i< arr.length ; i++) {
    let lowest = i;

    for(j= i+ 1; j <arr.length-1; j++){
if(arr[lowest ]> arr[j]) lowest = j

    }
    if(arr[lowest] !== arr[i]){
        [arr[lowest], arr[i]] = [arr[i], arr[lowest]]
    }
}
 console.log(arr)
}



sort([23,4,2,6,7,2,7,94,53,12,86])