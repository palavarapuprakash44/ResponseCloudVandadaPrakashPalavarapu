var str = "This is a sunny day"; // input can be given using prompt method
var lis = str.split(" ");
var result = "";
function reverse(someString) {
  // this reverse function returns reverse of a string
  var result = "";
  for (var k = someString.length - 1; k >= 0; k--) {
    result += someString.charAt(k);
  }
  return result;
}

var final = "";
for (var i of lis) {
  // reverse function is called on every word of the sentance and concatinated to "final" - result
  final += reverse(i) + " ";
}
console.log(final);
