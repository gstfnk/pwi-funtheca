package pwi.library.pwiLibrary.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import pwi.library.pwiLibrary.model.Book;
import pwi.library.pwiLibrary.model.Counter;
import pwi.library.pwiLibrary.service.BookService;

import java.util.List;

@Controller
@RequestMapping("/books")
public class BookController {
    @Autowired
    private BookService bookService;

    @RequestMapping("/getAll")
    public String getAll(Model model) {
        List<Book> bookList = bookService.getAll();
        model.addAttribute("books", bookList);
        model.addAttribute("counter", new Counter());
        return "index";
    }

    @PostMapping(value = "/addNew")
    public String addNew(Book book) {
        bookService.addNew(book);
        return "redirect:/books/getAll";
    }

    @RequestMapping(value = "/delete", method = {RequestMethod.DELETE, RequestMethod.GET})
    public String delete(Integer Id) {
        bookService.delete(Id);
        return "redirect:/books/getAll";
    }
}
