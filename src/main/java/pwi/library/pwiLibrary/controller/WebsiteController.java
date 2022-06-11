package pwi.library.pwiLibrary.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WebsiteController {
    @RequestMapping()
    public String initWebsite() {
        return "redirect:/books/getAll";
    }
}
