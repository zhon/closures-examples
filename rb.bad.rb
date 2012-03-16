lambdas = []
i = 1
while (i <= 10) do
  lambdas.push lambda { |x| puts x * i }
  i += 1
end


lambdas.each do |item|
  item.(2)
end
