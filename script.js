const citation = document.getElementById('citation');
const author = document.getElementById('author');
const blocCitation = document.getElementById('blocCitation');

function refresh()
{
    fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {citation.innerHTML = `"${data.content}"`, author.innerHTML = `${data.author}`
    });

    fetch('https://picsum.photos/1400/800')
    .then(response  => 
        {
            document.getElementById('pic').innerHTML = `<img src=${response.url} />`
        })
    
};

refresh();

blocCitation.addEventListener('click',refresh);

