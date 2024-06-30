// const arr = [1, 2, 3, 4, 5];
//  console.log(arr.map(x => x * x)); // [1, 4, 9, 16, 25]
//   console.log(arr.forEach(x => x * x)); // undefined

  const arr = [1, 2, 3, 4, 5];
//   console.log(arr.map(x => x * x).reduce((total, cur) => total + cur)); // 55
  console.log(arr.forEach(x => x * x).reduce((total, cur) => total + cur)); //Uncaught TypeError: Cannot read properties of undefine(reading 'reduce')

