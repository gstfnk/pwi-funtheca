document.addEventListener('DOMContentLoaded', () => {
    const link = document.querySelectorAll('.langProp');
    const quoteLang = document.querySelector('.quoteLANG');
    const quoteOUT = document.getElementById('quoteRandom');
    const authorOUT = document.getElementById('authorRandom');
    const citeOUT = document.getElementById('citeRandom');
    let randomNumber;
    let attr = document.querySelector('.activeLang').getAttribute('language');

    link.forEach(el => {
        el.addEventListener('click', () => {
            attr = el.getAttribute('language');

            if (attr === "polish") {
                quoteOUT.textContent = quotesPL[randomNumber];
                authorOUT.textContent = author[randomNumber];
                citeOUT.textContent = citePL[randomNumber];
            }
            if (attr === "english") {
                quoteOUT.textContent = quotesEN[randomNumber];
                authorOUT.textContent = author[randomNumber];
                citeOUT.textContent = citeEN[randomNumber];
            }
        });
    });

    quoteLang.addEventListener('click', () => {
        randomNumber = Math.floor(Math.random() * quotesPL.length);

        if (attr === "polish") {
            quoteOUT.innerHTML = quotesPL[randomNumber];
            authorOUT.textContent = author[randomNumber];
            citeOUT.textContent = citePL[randomNumber];
        }
        if (attr === "english") {
            quoteOUT.innerHTML = quotesEN[randomNumber];
            authorOUT.textContent = author[randomNumber];
            citeOUT.textContent = citeEN[randomNumber];
        }
    });

    const quotesPL = [
        "Reszta jest milczeniem.",
        "Nigdy nie rezygnuj z tego co chcesz naprawdę w życiu robić. Osoba z wielkimi marzeniami jest potężniejsza niż osoba posiadająca same suche fakty.",
        "Słuchaj swojego serca. Ono wie wszystko."
    ]

    const quotesEN = [
        "The rest is silence.",
        "Never give up on what you really want to do. The person with big dreams is more powerful than one with all the facts.",
        "Listen to your heart. It knows all things."
    ]

    const author = [
        "William Shakespeare",
        "Albert Einstein",
        "Paulo Coelho"
    ]

    const citePL = [
        "Hamlet",
        "Z życia",
        "Alchemik"
    ]

    const citeEN = [
        "The Tragedy of Hamlet",
        "From life",
        "The Alchemist"
    ]
});