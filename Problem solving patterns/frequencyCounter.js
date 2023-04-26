let wordOne = 'anagraam'
let wordTwo = 'nagaraam'


// freaquency counter pattern 
// find it the string is an anagram with 2 input strings

const isAnagram = (first, second)=>{
  let isLetter = {}
//check the length 
// get the frequency of the each letter in both string
// check and decrease the counter   of letter if it is in the arr
if(first.length !== second.length){
  return console.log(false)
} 


for (let i = 0; i < first.length; i++) {
let letter = first[i]
isLetter[letter] ? isLetter[letter] + 1 : isLetter[letter] = 1 
}
for (let i = 0; i < second.length; i++) {
  const letter = second[i];
  if (!isLetter[letter]) {
    return console.log('this is NOT an anagram / false')
  } else {
    isLetter[letter]  - 1
  }
  
}
return console.log('This is an angagram / TRUE')
}













isAnagram(wordOne, wordTwo)