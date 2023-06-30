Github.readme().then((response) => {
    let readmeHTMLElement = document.querySelector('.readme-list');
    response = response.split('\n');

    for (const line of response) {
        let lineElement = document.createElement('div');
        lineElement.innerHTML = marked.parse(line);
        readmeHTMLElement.appendChild(lineElement);
    }
});