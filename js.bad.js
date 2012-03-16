var lambdas = [],
    i;
for (i=1; i <= 10; ++i) {
    lambdas.push(function(x) { console.log(i * x); });
}

for (var j = 0; j < lambdas.length; ++j) {
    lambdas[j](2);
}
