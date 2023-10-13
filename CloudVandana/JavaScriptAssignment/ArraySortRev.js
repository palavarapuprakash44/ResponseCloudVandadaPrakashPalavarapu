// consider an array [1,5,27,7,7,0,-123,2,999]
//Bubble Sort
var original = [1, 5, 27, 7, 7, 0, -123, 2, 999];
function Sorter(arr) {
    var l = arr.length;
    for (var i = 0; i < l; i++) {
        for (var j = i; j < l; j++) {
            if (arr[i] < arr[j]) {    // if operator '<' is replaced with '>' we will get ascending order
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
Sorter(original).forEach(n => console.log(n));
// this problem can also be done using inbulit soting method