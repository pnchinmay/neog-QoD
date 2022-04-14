const replace = (arr,a,b) => {
  for(let i=0; i<arr.length; i++){
    if(arr[i]===a)
      arr[i]=b;
  }
  return arr;
}

console.log(replace([100,83,32,9,45,61,83], 83,101))

