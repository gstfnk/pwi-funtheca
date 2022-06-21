document.addEventListener('DOMContentLoaded', () => {
    const link = document.querySelectorAll('.langProp');
    const quoteLang = document.querySelector('.quoteLANG');
    const quoteOUT = document.getElementById('quoteRandom');
    const authorOUT = document.getElementById('authorRandom');
    const citeOUT = document.getElementById('citeRandom');
    let randomNumber;
    let previousNumber;
    let attr = document.querySelector('.activeLang').getAttribute('language');

    link.forEach(el => {
        el.addEventListener('click', () => {
            attr = el.getAttribute('language');

            if (attr === "polish") {
                quoteOUT.textContent = quotesPL[randomNumber];
                authorOUT.textContent = authorPL[randomNumber];
                citeOUT.textContent = citePL[randomNumber];
            }
            if (attr === "english") {
                quoteOUT.textContent = quotesEN[randomNumber];
                authorOUT.textContent = authorEN[randomNumber];
                citeOUT.textContent = citeEN[randomNumber];
            }
        });
    });

    quoteLang.addEventListener('click', () => {
        randomNumber = Math.floor(Math.random() * quotesPL.length);
        while (randomNumber === previousNumber) {
            randomNumber = Math.floor(Math.random() * quotesPL.length);
        }

        if (attr === "polish") {
            quoteOUT.innerHTML = quotesPL[randomNumber];
            authorOUT.innerHTML = authorPL[randomNumber];
            citeOUT.innerHTML = citePL[randomNumber];
        }
        if (attr === "english") {
            quoteOUT.innerHTML = quotesEN[randomNumber];
            authorOUT.innerHTML = authorEN[randomNumber];
            citeOUT.innerHTML = citeEN[randomNumber];
        }

        previousNumber = randomNumber;
    });

    const quotesPL = [
        "Reszta jest milczeniem.",
        "Nigdy nie rezygnuj z tego co chcesz naprawdę w życiu robić. Osoba z wielkimi marzeniami jest potężniejsza niż osoba posiadająca same suche fakty.",
        "Słuchaj swojego serca. Ono wie wszystko.",
        "Proście, a będzie wam dane, szukajcie, a znajdziecie.",
        "Ważne, że żyjesz w zgodzie ze sobą, nikogo nie udajesz i przed niczym nie uciekasz. Kiedy jesteś świadomie sobą i kochasz ten stan – jesteś szczęśliwy.",
        "Wszyscy od czasu do czasu bywamy niemili. Wszyscy robimy rzeczy, które bardzo chcielibyśmy cofnąć. Te żale stają się częścią tego, kim jesteśmy, wraz ze wszystkim innym. Jeśli ktoś próbuje to zmienić, to tak, jakby chciał gonić chmury.",
        "Często wystarczy jedna chwila, by wszystko zmienić.",
        "Przeszłość nie chce, żeby ją zmieniać. Przeszłość jest nieustępliwa.",
        "Nadchodzą trudne czasy. Trudne i niebezpieczne. Nadchodzi czas zmian. Przykro byłoby starzeć się w przekonaniu, że nie uczyniło się niczego, by zmiany, które nadchodzą, były zmianami na lepsze. Prawda?",
        "Dobrze widzi się tylko sercem. Najważniejsze jest niewidoczne dla oczu.",
        "- A jeśli pewnego dnia będę musiał odejść? - spytał Krzyś, ściskając Misiową łapkę. - Co wtedy?\n- Nic wielkiego. - zapewnił go Puchatek. - Posiedzę tu sobie i na Ciebie poczekam. Kiedy się kogoś kocha, to ten drugi ktoś nigdy nie znika."
    ]

    const quotesEN = [
        "The rest is silence.",
        "Never give up on what you really want to do. The person with big dreams is more powerful than one with all the facts.",
        "Listen to your heart. It knows all things.",
        "Ask, and it shall be given to you; seek, and you shall find.",
        "It’s important to live according to what you feel is right, without pretending you’re somebody else and running away from something. When you live like this and you enjoy it, that’s when you’re happy.",
        "We are all rude from time to time. We all do things that we'd love to take back. These regrets become part of who we are, along with everything else. If someone tries to change that, it's like chasing the clouds.",
        "Often one moment is enough to change everything",
        "The past does not want to be changed. The past is relentless.",
        "Times are hard. Difficult and dangerous. The time of change is coming. It would be sad to grow old believing that nothing has been done to make the changes that are coming change for the better. Truth?",
        "You only see well with your heart. The most important is invisible for eyes",
        "\"What if one day I have to leave?\" - Krzyś asked, clutching Teddy's paw. - Then what?\n- Nothing big. Pooh assured him. - I will sit here and wait for you. When you love someone, the other person never disappears."
    ]

    const authorPL = [
        "William Shakespeare",
        "Albert Einstein",
        "Paulo Coelho",
        "św. Mateusz",
        "Beata Pawlikowska",
        "Libba Bray",
        "Janette Rallison",
        "Stephen King",
        "Andrzej Sapkowski",
        "Antoine de Saint-Exupery",
        "Alan Alexander Milne"
    ]

    const authorEN = [
        "William Shakespeare",
        "Albert Einstein",
        "Paulo Coelho",
        "st. Matthew",
        "Beata Pawlikowska",
        "Libba Bray",
        "Janette Rallison",
        "Stephen King",
        "Andrzej Sapkowski",
        "Antoine de Saint-Exupery",
        "Alan Alexander Milne"
    ]

    const citePL = [
        "Hamlet",
        "Z życia",
        "Alchemik",
        "Biblia",
        "W dżungli samotności",
        "Mroczny sekret",
        "Taka sobie wróżka",
        "Dallas '63",
        "Krew Elfów",
        "Mały Książę",
        "Kubuś Puchatek"
    ]

    const citeEN = [
        "The Tragedy of Hamlet",
        "From life",
        "The Alchemist",
        "Bible",
        "In the jungle of loneliness",
        "Dark secret",
        "My Fair Godmother",
        "11/22/63",
        "Blood of Elves",
        "The Little Prince",
        "Winnie the Pooh"
    ]
});