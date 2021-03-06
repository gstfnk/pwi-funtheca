document.addEventListener('DOMContentLoaded', () => {
    const langEl = document.querySelector('.langWrap');

    const link = document.querySelectorAll('.langProp');

    const bookListEl = document.querySelector('.bookListLANG');
    const quoteEl = document.querySelector('.quoteLANG');
    const playMemoryEl = document.querySelector('.playMemoryLANG');
    const techEl = document.querySelector('.techLANG');
    const langsEl = document.querySelector('.langsLANG');
    const plEl = document.querySelector('.plLANG');
    const enEl = document.querySelector('.enLANG');
    const shareBookEl = document.querySelector('.shareBookLANG');
    const shareBookDesc = document.querySelector('.shareBookLANGdesc');
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

    const bookListEl2 = document.querySelector('.bookListLANG2');
    const quoteEl2 = document.querySelector('.quoteLANG2');
    const memoryGameEl = document.querySelector('.memoryGameLANG');

    const bookListDescEl = document.querySelector('.bookListDescLANG');
    const quoteDescEl = document.querySelector('.quoteDescLANG');
    const memoryDescEl = document.querySelector('.memoryDescLANG');

    link.forEach(el => {
        el.addEventListener('click', () => {
            langEl.querySelector('.activeLang').classList.remove('activeLang');
            el.classList.add('activeLang');

            const attr = el.getAttribute('language');

            bookListEl.textContent = langs[attr].bookListLANG;
            techEl.textContent = langs[attr].techLANG;
            quoteEl.textContent = langs[attr].quoteLANG;
            playMemoryEl.textContent = langs[attr].playMemoryLANG;
            langsEl.textContent = langs[attr].langsLANG;
            plEl.textContent = langs[attr].plLANG;
            enEl.textContent = langs[attr].enLANG;

            shareBookEl.textContent = langs[attr].shareBookLANG;
            shareBookDesc.textContent = langs[attr].shareBookLANGdesc;
            addBookEl.textContent = langs[attr].addBookLANG;
            titleEl.textContent = langs[attr].titleLANG;
            authorEl.textContent = langs[attr].authorLANG;
            deleteEl.textContent = langs[attr].deleteLANG;
            newBookEl.textContent = langs[attr].newBookLANG;

            titlePlaceholderEl.placeholder = langs[attr].titleLANG;
            authorPlaceholderEl.placeholder = langs[attr].authorLANG;

            exitEl.textContent = langs[attr].exitLANG;
            saveEl.textContent = langs[attr].saveLANG;
            confirmDeleteEl.textContent = langs[attr].confirmDeleteLANG;
            questionDeleteEl.textContent = langs[attr].questionDeleteLANG;
            deleteEl2.textContent = langs[attr].deleteLANG;
            exitEl2.textContent = langs[attr].exitLANG;

            bookListEl2.textContent = langs[attr].bookListLANG;
            quoteEl2.textContent = langs[attr].quoteLANG;
            memoryGameEl.textContent = langs[attr].memoryGameLANG;

            bookListDescEl.textContent = langs[attr].bookListDescLANG;
            quoteDescEl.textContent = langs[attr].quoteDescLANG;
            memoryDescEl.textContent = langs[attr].memoryDescLANG;
        });
    });

    const langs = {
        "english":
            {
                "bookListLANG": "Book list",
                "techLANG": "Technologies",
                "quoteLANG": "Quote",
                "playMemoryLANG": "Play memory game!",
                "langsLANG": "Languages",
                "plLANG": "Polish",
                "enLANG": "English",
                "shareBookLANG": "Share your favorite book!",
                "addBookLANG": "Add book",
                "titleLANG": "Title",
                "authorLANG": "Author",
                "deleteLANG": "Delete",
                "newBookLANG": "New book",
                "exitLANG": "Close",
                "saveLANG": "Save",
                "memoryGameLANG": "Memory Game",
                "confirmDeleteLANG": "Confirm the deletion",
                "questionDeleteLANG": "Do you want to delete this book?",
                "memoryDescLANG": "Test yourself and your memory in a simple game that our website has prepared for you!",
                "quoteDescLANG": "By clicking the \"Quote\" button on the top bar of the page with another sentence, check if you can read something for yourself!",
                "bookListDescLANG": "Do you feel the chills after reading the book? Or maybe one of them put a smile on your face? Share the title and its author in our book list!",
                "shareBookLANGdesc": "Sharing the positive is fun, so share what has caught your eye recently from the world of the magic book :)"
            },
        "polish":
            {
                "bookListLANG": "Spis ksi????ek",
                "techLANG": "Technologie",
                "quoteLANG": "Cytat",
                "playMemoryLANG": "Zagraj w memory!",
                "langsLANG": "J??zyki",
                "plLANG": "Polski",
                "enLANG": "Angielski",
                "shareBookLANG": "Podziel si?? swoj?? ulubion?? ksi????k??!",
                "addBookLANG": "Dodaj ksi????k??",
                "titleLANG": "Tytu??",
                "authorLANG": "Autor",
                "deleteLANG": "Usu??",
                "newBookLANG": "Nowa ksi????ka",
                "exitLANG": "Zamknij",
                "saveLANG": "Zapisz",
                "memoryGameLANG": "Gra Memory",
                "confirmDeleteLANG": "Potwierd?? usuni??cie",
                "questionDeleteLANG": "Na pewno chcesz usun???? ksi????k???",
                "memoryDescLANG": "Sprawd?? siebie i swoj?? pami???? w prostej grze, jak?? przygotowa??a Ci nasza strona!",
                "quoteDescLANG": "Klikaj??c w przycisk \"Cytat\" umieszczony na g??rnym pasku strony inn?? sentencj??, sprawd??, czy przeczytasz co?? dla siebie!",
                "bookListDescLANG": "Czujesz dreszcze po przeczytaniu ksi????ki? Albo mo??e kt??ra?? z nich sprawi??a u??miech na Twojej twarzy? Podziel si?? tytu??em i jej autorem w naszym spisie ksi????ek!",
                "shareBookLANGdesc": "Dzielenie si?? tym co pozytywne jest fajne, wi??c podziel si?? tym, co ostatnio wpad??o Ci w oko ze ??wiata magicznej ksi????ki :)"
            }
    };
});