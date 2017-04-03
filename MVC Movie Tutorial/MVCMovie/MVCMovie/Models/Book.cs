using System;
using System.ComponentModel.DataAnnotations;

namespace MVCMovie.Models
{
    public class Book
    {
        public int ID { get; set; }

        public string Author { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public decimal Price { get; set; }

        [StringLength(maximumLength:150, ErrorMessage = "Invalid Format", MinimumLength = 15)]
        [DataType(DataType.Date)]
        public DateTime dateReleased { get; set; }
    }
}