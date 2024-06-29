const newObject = {};
Object.preventExtensions(newObject); // NOT extendable

try {
  Object.defineProperty(newObject, "newProperty", {
    // Adding new property
    value: 100,
  });
} catch (e) {
  console.log(e); // TypeError: Cannot define property newProperty, object is not extensible
}


