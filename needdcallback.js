function firstFunction() {
    // Simulate a code delay
    setTimeout(function () {
      console.log("First function called");
    }, 1000);
  }
  function secondFunction() {
    console.log("Second function called");
  }

  function thirdFunction() {
    setTimeout(function () {
        console.log("third function called");
      }, 5000);
  }
  firstFunction();
  secondFunction();
  thirdFunction();
  
