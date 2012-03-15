l = []
1.upto(10) do |i|
  l.push lambda { |x| puts i * x }
end

l.each { |item| item.(2) }
