const indexOf = (arr,a) => {
  for(let i=0; i<arr.length; i++){
    if(arr[i]===a){
      return i;
    }
  }
  return -1;
}

let arr=[1,6,3,5,8,9]
a = 3
console.log(indexOf(arr,a))
