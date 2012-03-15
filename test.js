// Run with cscript on windows
var lambdas = [];
var i, j;

index_grabber = function(index) {
  return function(x) {
    Console.log(index * x);
  }
}

for (i=1; i<=10; ++i) {
  lambdas.push(index_grabber(i));
}

for (j=0; j< lambdas.length; ++j) {
  lambdas[j](2);
}
