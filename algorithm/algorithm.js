//finding largest number in array
var array = [89, 19, 29, 39, 09, 2, 33, 56, 77, 23];
var largest = 0;
var smallest = array[0];
document.writeln("");

for (var i = 0; i <= largest; i++) {
  if (array[i] >= largest) {
    largest = array[i];
    document.writeln("Largest number out of an array with an iteration:");
    document.writeln(largest);
  }

}
//finding smallest number in array

for (var i = 1; i < array.length; i++) {
  if (array[i] < smallest) {
    smallest = array[i];
  }
}
document.writeln("Smallest number out of an array with an iteration:");
document.writeln(smallest);
