using System.Data.Entity;

namespace MVCMovie.Models
{
    public class MovieDBContext : DbContext
    {
        public DbSet<Movie> Movies { get; set; }
    }
}