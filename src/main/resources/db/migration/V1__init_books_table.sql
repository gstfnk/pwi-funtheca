drop table if exists books;
create table books(
                      id SERIAL PRIMARY KEY,
                      title VARCHAR(100),
                      author VARCHAR(100)
);