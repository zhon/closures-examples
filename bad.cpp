#include <functional>
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

// To compile use the following:
// g++ -std=c++0x test.cpp
int main() {
  vector<function<void(int)>> v;
  for (auto i = 1; i <= 10; ++i) {
    v.push_back([&](int x){ cout << x * i << endl; });
  }

  for_each (v.begin(), v.end(), [](function<void(int)> item){ item(2); });
}
