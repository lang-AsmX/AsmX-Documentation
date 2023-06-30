const forkGitHub = Github.fork();

const files = forkGitHub.http().get('/contents/examples');

files.then((response) => {
    let examlesHTMLElement = document.querySelector('.examples-list');

    for (const file of response) {
        if (file?.type == 'file') {
            let fname = file['path'];
            (async function name(filename) {
                await fetch(
                    `https://raw.githubusercontent.com/langprogramming-AsmX/AsmX/main/examples/${filename}`, 
                    { method: 'GET' }
                ).then(response => response.text()).then((repsonse) => {
                    response = repsonse.split('\n');
                    let exampleHTMLFile = document.createElement('div');
                    exampleHTMLFile.className = 'examples_list_source-code';

                    let templateHTML = `
                    <div id="window" style="width: 400px;">
                        <div id="navbar">
                           <!-- <div id="window-controls">
                                <div class="red dot"></div>
                                <div class="yellow dot"></div>
                                <div class="green dot"></div>
                            </div>-->
                        
                            <div id="window-title" hidden="">${fname}</div>
                        </div>

                            <div id="container" style="font-size: 14px; line-height: 19px;"></div>
                    </div>`;
                    
                    let doc = new DOMParser().parseFromString(templateHTML, 'text/html');
                    exampleHTMLFile.appendChild(doc.querySelector('#window'));

                    response.map((line) => {
                        let exampleHTMLFileLine = document.createElement('div');
                        exampleHTMLFileLine.className = 'examples_list_source-code__line';
                        exampleHTMLFileLine.innerHTML = line;
                        // exampleHTMLFile.appendChild(exampleHTMLFileLine); v1

                        let el = exampleHTMLFile.querySelector('#container');
                        el.appendChild(exampleHTMLFileLine);
                    });
                    

                    // console.log(el);
                    // el.appendChild(exampleHTMLFile); v1

                    examlesHTMLElement.appendChild(exampleHTMLFile);
                });
            })(file['name']);
        }
    }
});