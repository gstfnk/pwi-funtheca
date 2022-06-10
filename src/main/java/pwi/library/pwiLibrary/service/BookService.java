package pwi.library.pwiLibrary.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pwi.library.pwiLibrary.model.Book;
import pwi.library.pwiLibrary.repository.BookRepository;

import java.util.List;

@Service
public class BookService {
    @Autowired
    private BookRepository bookRepository;

    public List<Book> getAll() {
        return (List<Book>) bookRepository.findAll();
    }

    public void addNew(Book book) {
        bookRepository.save(book);
    }

    public void delete(Integer id) {
        bookRepository.deleteById(id);
    }
}
