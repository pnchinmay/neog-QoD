const upper = (ch) => {
  if(ch.charCodeAt)
}
const toSentenceCase = (str1) => {
  let str2 = ""
  for(let i=0; i<str1.length; i++){
    if(i==0)
      str2 += str1[0].toUpperCase();
    else if(str1[i]==" ")
      str2 += str1[i].toUpperCase();
    else
      str2 += str1[i]
  }
  return str2;
}
a = "We are neog";
console.log(toSentenceCase(a))
