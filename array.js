// using this array,
 var array = ["Banana","Apples", "Oranges", "Blueberries"];
 console.log(array);
 var array1 = array.shift();
 console.log(array);
 var array2 = array.sort();
 console.log(array)
 var array3= array.concat(["kiwi"]);
 console.log(array3);
 var array4 = array3.shift();
 console.log(array3);
 var array5 = array3.reverse();
 console.log(array3)

//using this array,
var array6 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
//access "Oranges".
console.log(array6[1][1][0])