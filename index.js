const tiny = (string) => {
  if (typeof string !== "string") throw new TypeError("Tiny wants a string!");
  return string.replace(/\s/g, "");
} 

const testFunc = () => {
  console.log('Test Func');
}

module.exports = {
  tiny,
  testFunc
}

//module.exports = function tiny(string) {
  //if (typeof string !== "string") throw new TypeError("Tiny wants a string!");
  //return string.replace(/\s/g, "");
//};
