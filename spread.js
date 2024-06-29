function calculateSum(x, y, z) {
    return x + y + z;
  }
  
  function calculateMultiply(x,y,z){
    return x*y*z;
  }
  const numbers = [1, 2, 3,4,5,7,8, 9 ,10];
  
  
  console.log(calculateSum(...numbers)); // 6
    console.log(calculateMultiply(...numbers)); // 6
  