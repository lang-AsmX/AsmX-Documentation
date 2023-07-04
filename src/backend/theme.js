let theme = document.querySelector('button.theme-change');

theme.addEventListener('click', (e) => {
    if (document.body.dataset.theme == 'light') {
        document.body.dataset.theme = 'dark';
    } else {
        document.body.dataset.theme = 'light';
    }
});