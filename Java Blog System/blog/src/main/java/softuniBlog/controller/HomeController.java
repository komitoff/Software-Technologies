package softuniBlog.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import softuniBlog.bindingModel.ArticleBindingModel;
import softuniBlog.entity.Article;
import softuniBlog.repository.ArticleRepository;

import javax.persistence.Id;
import java.util.List;

@Controller
public class HomeController {

    @Autowired
    private ArticleRepository articleRepository;

    @GetMapping("/")
    public String index(Model model) {
        List<Article> articles = this.articleRepository.findAll();
        model.addAttribute("view", "home/index");
        model.addAttribute("articles", articles);
        return "base-layout";
    }

    @GetMapping("/article/{id}")
    public String details(Model model, @PathVariable Integer id) {
        if(!this.articleRepository.exists(id)) {
            return "redirect:/";
        }
        Article currentArticle = this.articleRepository.findOne(id);
        model.addAttribute("view", "article/details");
        model.addAttribute("article", currentArticle);
        return "base-layout";
    }

}
