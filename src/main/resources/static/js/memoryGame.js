document.addEventListener('DOMContentLoaded', () => {

    const memoryGame = document.querySelectorAll('.game-element');

    let hasToggledMemory = false;
    let isLocked = false;
    let firstSide;
    let secondSide;

    (function randomize() {
        memoryGame.forEach(element => {
            element.style.order = Math.floor(Math.random() * 12);
        });
    })();

    function toggleMemory() {
        if (isLocked) {
            return;
        }
        if (this === firstSide) {
            return;
        }

        this.classList.add('toggle');

        if (hasToggledMemory) {
            secondSide = this;

            matchChecker();
        } else {
            hasToggledMemory = true;
            firstSide = this;
        }
    }

    function untoggleMemory() {
        isLocked = true;
        setTimeout(() => {
            firstSide.classList.remove('toggle');
            secondSide.classList.remove('toggle');

            resetBoard();
        }, 1500);
    }

    function resetBoard() {
        hasToggledMemory = false;
        isLocked = false;
        firstSide = null;
        secondSide = null;
    }

    function matchChecker() {
        let isMatch = firstSide.dataset.language === secondSide.dataset.language;
        if (isMatch) {
            removeClickListener();
        } else {
            untoggleMemory();
        }
    }

    function removeClickListener() {
        firstSide.removeEventListener('click', toggleMemory);
        secondSide.removeEventListener('click', toggleMemory);
        resetBoard();

    }

    memoryGame.forEach(element => element.addEventListener('click', toggleMemory));
});