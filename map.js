const countries = [
    { name: "India", capital: "Delhi" },
    { name: "US", capital: "Washington" },
    { name: "Russia", capital: "Moscow" },
    { name: "Singapore", capital: "Singapore" },
    { name: "China", capital: "Beijing" },
    { name: "France", capital: "Paris" },
  ];
  
  const cityNames = Array.from(countries, ({ capital }) => capital);
  console.log(cityNames);
  