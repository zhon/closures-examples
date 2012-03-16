var lambdas = [],
    i, j;

for (i=1; i<=10; ++i) {
    lambdas.push((function(index) {
            return function(x) {
                console.log(index * x);
            }
        }(i)));
}

for (j=0; j< lambdas.length; ++j) {
    lambdas[j](2);
}
