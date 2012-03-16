using System;
using System.Linq;

namespace Closures
{
    class Program
    {
        private delegate void FuncType(int x);

        static void Main(string[] args)
        {
            var ints = Enumerable.Range(1, 10);
            var myLambdas = ints.Select(i => (FuncType) (x => Console.WriteLine(x*i))).ToList();

            foreach (var lambda in myLambdas)
            {
                lambda(2);
            }

            Console.ReadLine();
        }
    }
}

