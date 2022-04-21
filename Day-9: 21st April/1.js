const typeOfTriangle = (a,b,c) => {
  if(a+b+c!==180)
    return "Not a triangle";
  else if(a===b && b===c)
    return "Equilateral Triangle";
  else if(a===b || b===c || c===a)
    return "Isoscles Triangle";
  else
    return "Scalene Triangle";
}

console.log(typeOfTriangle(45,90,45))
