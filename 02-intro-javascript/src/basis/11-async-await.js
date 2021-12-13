// ASYNC - AWAIT
// const getImagePromise = () => new Promise ( (resolve) => resolve('https://apple.com') );
// getImagePromise().then(console.log);

const getImage = async() => {
    // TO WORK WITH AWAIT YOU NEED TO WORK IN AN ASYNC FUNCTION.
    try{
        const apiKey = 'OH0o7PPxx6fHg58kbFeOk2MruHD9QYRH';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();

        const {url} = await data.images.original;

        const image = document.createElement('img');
    
        image.src = url;
        document.body.appendChild(image);
    } catch (error_message){
        console.error(error_message)
    }
}

getImage();