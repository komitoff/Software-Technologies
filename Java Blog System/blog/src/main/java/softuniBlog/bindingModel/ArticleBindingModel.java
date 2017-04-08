package softuniBlog.bindingModel;

import javax.validation.constraints.Size;

public class ArticleBindingModel {

    @Size(min = 1)
    private String title;
    @Size(min = 1)
    private String content;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
