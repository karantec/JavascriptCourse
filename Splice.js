//  slice in javascript means 
//      you can add/ remove item to/ from an Array and we can return the remove item .
//       spice method we have two arguments 
//       1.  the first arguments is specifies the position of the first element that we want to remove 
//       2. the second arguments is specifies the number of elements that we want to remove.


//  let array1 =[1,2,3,4]
//  let aray2=[1,4 ,5,6]
//  let array3=[6,7, 8 ,9]

//   let result=array1.splice(1,2);
//   console.log(result);
// let result2=array3.splice(4,1)
// console.log(result2);
let webDvlop = ["HTML", "CSS", "JS", "Bootstrap"];
console.log(webDvlop);

// Add 'React_Native' and 'Php' after removing 'JS'.
let removed = webDvlop.splice(2, 1, 'PHP', 'React_Native')
console.log(webDvlop);
console.log(removed);