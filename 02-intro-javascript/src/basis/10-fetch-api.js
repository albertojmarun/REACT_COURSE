// FETCH API
const apiKey = 'OH0o7PPxx6fHg58kbFeOk2MruHD9QYRH';

const petition = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

petition
    .then((resp) => resp.json())
    .then (({data}) => {
        const {url} = data.images.original;
        
        const image = document.createElement('img');
        image.src = url;
        
        document.body.appendChild(image);
    })
    .catch(console.warn);