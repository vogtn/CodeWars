//Find the square of the next number
// function(12) = 121
function findNextSquare(sq) {
  // Return the next square if sq if a perfect square, -1 otherwise
  if(Math.sqrt(sq) == Math.floor(Math.sqrt(sq))){
    var next = sq;
    var square = Math.floor(Math.sqrt(next) + 1);
    sq = square * square;
    return sq;
  }else{
    return -1;
  }
}

//Square every digit
function squareDigits(num){
  //may the code be with you
  var digits = ("" + num).split("");
  for(var i =0; i < digits.length; i++){
    digits[i] = (digits[i] * digits[i])
  }
  return Number(digits.join(""));
}

//Reverse the words that are 5 characters or longer
function spinWords(phrase){
  //split phase into separate words
  var words = phrase.split(" ");
  //for loop to separate the words to manipulate
  for(var i =0; i < words.length; i++){
    if(words[i].length >= 5){
    //splits words that are longer than 5 characters, reverses them, then joins them back together
      words[i] = words[i].split("").reverse().join("");
    }
  }
  //returns back to string by spaces
  return words.join(" ");
}
