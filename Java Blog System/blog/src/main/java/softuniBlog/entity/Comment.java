package softuniBlog.entity;

import javax.persistence.*;

@Entity
@Table(name = "comments")
public class Comment {
    private int id;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    private User author;
    private Article article;
    private String content;

    public Comment(int id, User author, Article article, String content) {
        this.id = id;
        this.author = author;
        this.article = article;
        this.content = content;
    }

    public Comment() { }

    @OneToOne
    @JoinColumn(nullable = false, name = "authorId")
    public User getAuthorId() {
        return author;
    }

    public void setAuthorId(User authorId) {
        this.author = authorId;
    }

    @OneToOne
    @JoinColumn(nullable = false, name = "articleId")
    public Article getArticleId() {
        return article;
    }

    public void setArticleId(Article articleId) {
        this.article = articleId;
    }

    @Column(nullable = false, columnDefinition = "text")
    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
