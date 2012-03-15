using System;
using System.Collections.Generic;
using System.Linq;

namespace Closures
{
    class Program
    {
        private delegate void FuncType(int x);

        static void Main(string[] args)
        {
            var myLambdas = new List<FuncType>();
            var ints = Enumerable.Range(1, 10);
            foreach (var i in ints)
            {
                myLambdas.Add(x => Console.WriteLine(x*i));
            }

            foreach (var lambda in myLambdas)
            {
                lambda(2);
            }

            Console.ReadLine();
        }
    }
}

