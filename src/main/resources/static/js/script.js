$('document').ready(function () {
    $('.table #deleteButton').on('click', function (event) {
        event.preventDefault();
        const href = $(this).attr('href');
        $('#deleteModal #delRef').attr('href', href);
        $('#deleteModal').modal();
    });
});


const app = {
    pages: [],
    show: new Event('show'),
    init: function () {
        app.pages = document.querySelectorAll('.pageCSS');

        document.querySelectorAll('.spa-link').forEach((link) => {
            link.addEventListener('click', app.nav);
            history.replaceState({}, 'BookList', '#bookList');
        })
    },
    nav: function (ev) {
        ev.preventDefault();
        let currentPage = ev.target.getAttribute('data-target');
        document.querySelector('.activation').classList.remove('activation');
        document.getElementById(currentPage).classList.add('activation');
        history.pushState({}, currentPage, `#${currentPage}`);
        document.getElementById(currentPage).dispatchEvent(app.show);
    }
}

document.addEventListener('DOMContentLoaded', app.init);
