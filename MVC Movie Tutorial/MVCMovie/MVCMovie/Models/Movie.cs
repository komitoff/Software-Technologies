using System;

namespace MVCMovie.Models
{
    public class Movie
    {
        private DateTime releaseDate;

        public int ID { private get; set; }
        public string Title { get; set; }
        public DateTime ReleaseDate
        {
            get
            {
                return this.releaseDate;
            }
            set
            {
                this.releaseDate = DateTime.Now;
            }
        }
        public string Genre { get; set; }
        public decimal Price { get; set; }
    }


}