lambdas = []
lambdas.upto(10) do |i|
  lambdas.push lambda { |x| puts i * x }
end

lambdas.each { |item| item.(2) }
