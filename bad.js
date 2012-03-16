var lambdas = [];
var i;
for (i=1; i <= 10; ++i) {
  lambdas.push(function(x) { console.log(i * x); });
}

for (var i = 0; i < lambdas.length; ++i) {
  lambdas[i](2);
}
