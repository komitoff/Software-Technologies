using System;

namespace Calculator_CSharp.Models
{
    public class Calculator
    {
        public decimal LeftOperand { get; set; }
        public decimal RightOperand { get; set; }
        public String Operator { get; set; }
        public decimal Result { get; set; }

        public Calculator ()
        {
            this.Result = 0;
        }
    }
}