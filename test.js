// Run with cscript on windows
var l = [];
var i, j;

index_grabber = function(index) {
  return function(x) {
    WScript.Echo(index * x);
  }
}

for (i=1; i<=10; ++i) {
  l.push(index_grabber(i));
}

for (j=0; j< l.length; ++j) {
  l[j](2);
}
