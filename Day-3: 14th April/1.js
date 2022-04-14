const noOfWords = (str) => {
  let count = 0
  if(str.length>0)
    count = 1;
  else
    return count;
  for(let i=0; i<str.length; i++){
    if(str[i]===" " && i+1<str.length && str[i+1]!=" ")
      count++;
  }
  return count;
}

console.log(noOfWords("We are  neoGrammers "))
