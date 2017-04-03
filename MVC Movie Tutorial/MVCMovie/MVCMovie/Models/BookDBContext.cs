using System.Data.Entity;

namespace MVCMovie.Models
{
    public class BookDBContext : DbContext
    {
        public DbSet<Book> Books { get; set; }
    }
}