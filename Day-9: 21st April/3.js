const func = (s) => {
  s = s.split(" ").join("");
  let dict = {};
  let mx = -1;
  let itemmax;
  for(let i=0; i<s.length; i++){
    if(s[i] in dict)
      dict[s[i]]++;
    else
      dict[s[i]] = 1;
  }
  for(let item in dict){
    if(dict[item]>mx){
      mx = dict[item];
      itemmax = item;
    } 
  }
  return itemmax;
}
console.log(func("Hello World"));
