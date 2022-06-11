document.addEventListener('DOMContentLoaded', () => {
    const langEl = document.querySelector('.langWrap');

    const link = document.querySelectorAll('.langProp');

    const bookListEl = document.querySelector('.bookListLANG');
    const quoteEl = document.querySelector('.quoteLANG');
    const techEl = document.querySelector('.techLANG');
    const langsEl = document.querySelector('.langsLANG');
    const plEl = document.querySelector('.plLANG');
    const enEl = document.querySelector('.enLANG');
    const shareBookEl = document.querySelector('.shareBookLANG');
    const addBookEl = document.querySelector('.addBookLANG');
    const titleEl = document.querySelector('.titleLANG');
    const authorEl = document.querySelector('.authorLANG');
    const deleteEl = document.querySelector('.deleteLANG');
    const newBookEl = document.querySelector('.newBookLANG');

    // Placeholders
    const titlePlaceholderEl = document.querySelector('.titlePlaceholderLANG');
    const authorPlaceholderEl = document.querySelector('.authorPlaceholderLANG');

    const exitEl = document.querySelector('.exitLANG');
    const saveEl = document.querySelector('.saveLANG');
    const confirmDeleteEl = document.querySelector('.confirmDeleteLANG');
    const questionDeleteEl = document.querySelector('.questionDeleteLANG');
    const deleteEl2 = document.querySelector('.deleteLANG2');
    const exitEl2 = document.querySelector('.exitLANG2');

    link.forEach(el => {
        el.addEventListener('click',() => {
            langEl.querySelector('.activeLang').classList.remove('activeLang');
            el.classList.add('activeLang');

            const attr = el.getAttribute('language');

            bookListEl.textContent = langs[attr].bookListLANG;
            techEl.textContent = langs[attr].techLANG;
            quoteEl.textContent = langs[attr].quoteLANG;
            langsEl.textContent = langs[attr].langsLANG;



            titlePlaceholderEl.placeholder = langs[attr].titleLANG;
            authorPlaceholderEl.placeholder = langs[attr].authorLANG;
        });
    });

    const langs = {
        "english":
            {
                "bookListLANG": "Book list",
                "techLANG" : "Technologies",
                "quoteLANG" : "Quote",
                "playMemoryLANG" : "Play memory game!",
                "langsLANG" : "Languages",
                "plLANG" : "Polish",
                "enLANG" : "English",
                "shareBookLANG" : "Share your favorite book!",
                "addBookLANG" : "Add book",
                "titleLANG" : "Title",
                "authorLANG" : "Author",
                "deleteLANG" : "Delete",
                "newBookLANG" : "New book",
                "exitLANG" : "Close",
                "saveLANG" : "Save",
                "confirmDeleteLANG" : "Confirm the deletion",
                "questionDeleteLANG" : "Do you want to delete this book?"
            },
        "polish":
            {
                "bookListLANG": "Spis książek",
                "techLANG" : "Technologie",
                "quoteLANG" : "Cytat",
                "playMemoryLANG" : "Zagraj w memory!",
                "langsLANG" : "Języki",
                "plLANG" : "Polski",
                "enLANG" : "Angielski",
                "shareBookLANG" : "Podziel się swoją ulubioną książką!",
                "addBookLANG" : "Dodaj książkę",
                "titleLANG" : "Tytuł",
                "authorLANG" : "Autor",
                "deleteLANG" : "Usuń",
                "newBookLANG" : "Nowa książka",
                "exitLANG" : "Zamknij",
                "saveLANG" : "Zapisz",
                "confirmDeleteLANG" : "Potwierdź usunięcie",
                "questionDeleteLANG" : "Na pewno chcesz usunąć książkę?"
            }
    };
});