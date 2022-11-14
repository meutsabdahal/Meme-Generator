import React from 'react';

import memesData from '../memesData.js'


function Meme() {

    // const [memeImage, setMemeImage] = React.useState('')
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'https://i.imgflip.com/1bij.jpg'
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    // function to randomly generate meme images
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const random = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[random].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))

    }

    return(
        <main>
            {/* form component */}
            <div className="form">
                <input type = 'text' placeholder= 'Top Text' className = 'input-form' />
                <input type = 'text' placeholder= 'Botton Text' className = 'input-form' />

                <button className = 'button-form' onClick = {getMemeImage}>Get a New Meme Image</button>
            </div>

        <center><img src = {meme.randomImage} className = 'meme-image'/></center>
        </main>
    )
}

export default Meme