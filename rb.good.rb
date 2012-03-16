lambdas = []
1.upto(10) { |i|
  lambdas.push lambda { |x| puts i * x }
}

lambdas.each { |item| item.(2) }
