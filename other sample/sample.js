
function wordmatch(long, short) { 
    let count = 0
for(i=0; i<=long.length -1; i++){

  
for(j=0; j<=short.length-1; j++){
  
if (long[i+j] !== short[j]) {
 break ; 
}
if (j === short.length - 1) count++ 

}


}
return count;

 }

console.log( wordmatch('womgsffwomgwdfsdhfomsdhfgsdfomg','omg'))