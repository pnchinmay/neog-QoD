const minDate = (d1, d2) => {
  let d11 = d1.split("/");
  let d12 = d2.split("/");
  if(parseInt(d11[2])>parseInt(d12[2]))
    return d2;
  else if(parseInt(d11[2])<parseInt(d12[2]))
    return d1;
  else{
    if(parseInt(d11[1])>parseInt(d12[1]))
      return d2;
    else if(parseInt(d11[1])<parseInt(d12[1]))
      return d1;
    else{
      if(parseInt(d11[0])>parseInt(d12[0]))
        return d2;
      else if(parseInt(d11[0])<parseInt(d12[0]))
        return d1;
      else return d1;
    }
  }  
}

console.log(minDate('02/05/2021', '24/01/2021'))
