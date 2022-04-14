const sortArray = (arr) => {
  for(let i=0; i<arr.length; i++){
    for(let j=0; j<i; j++){
      if(arr[j]>arr[j+1]){
        let temp = arr[j];
        arr[j]= arr[j+1];
        arr[j+1]= temp;
      }
    }
  }
  return arr;
}

console.log(sortArray([100,83,32,9,45,61]));
