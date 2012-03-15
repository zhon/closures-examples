//#include <functional>
#include <iostream>
#include <vector>
#include <algorithm>

int main() {
  std::vector<int> v;
  for (auto i = 1; i <= 10; ++i) {
    v.push_back(i);
  }
  std::for_each(v.begin(), v.end(), [](int item) { std::cout << item << std::endl; });
}
