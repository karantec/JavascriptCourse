function foo() {
    let b = 1;
    function inner() {
        return b;
    }
    return inner;
}
let get_func_inner = foo();

console.log(get_func_inner());
console.log(get_func_inner());
console.log(get_func_inner());


// In the above example we used a parameter function rather than a default one. 
// Not even when we are done with the execution of foo(5) we can access the outer_arg
//  variable from the inner function. And on the execution of the inner function produce 
//  the summation of outer_arg and inner_arg as desired. 
// Now let’s see an example of closure within a loop. 
// In this example, we would store an anonymous function at every index of an array. 

// Outer function
function outer() {
    let arr = [];
    let i;
    for (i = 0; i < 4; i++) {
        // storing anonymous function
        arr[i] = function () { return i; }
    }

    // returning the array.
    return arr;
}

let get_arr = outer();

console.log(get_arr[0]());
console.log(get_arr[1]());
console.log(get_arr[2]());
console.log(get_arr[3]());

Output: 
4
4
4
4
// Did you guess the right answer? In the above code, we have created
//  four closures that point to the variable i which is the local variable 
//  to the function outer. Closure doesn’t remember the value of the variable 
//  it only points to the variable or stores the reference of the variable and 
//  hence, returns the current value. In the above code when we try to update the value it 
// gets reflected all because the closure stores the reference. 

4
4
4
4
// Did you guess the right answer? In the above code, we have created four closures that point to the variable i which is the local variable to the function outer. Closure doesn’t remember the value of the variable it only points to the variable or stores the reference of the variable and hence, returns the current value. In the above code when we try to update the value 
// it gets reflected all because the closure stores the reference. 