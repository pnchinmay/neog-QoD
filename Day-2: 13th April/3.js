const toSentenceCase = (str1) => {
  let str2 = ""
  for(let i=0; i<str1.length; i++){
    if(i==0)
      str2 += str1[i].toUpperCase();
    else if(str1[i]==" "){
      str2 += " "
      str2 += str1[i+1].toUpperCase();
    }
    else{
      if(str1[i-1]==" ");
      else
        str2 += str1[i]
    }
  }
  return str2;
}

let a = "we are neog"
console.log(toSentenceCase(a))
