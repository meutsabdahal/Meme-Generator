import React from 'react';

import memesData from '../memesData.js'


function Meme() {

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

    // handles changes in form component
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name] : value
        }))
    }

    return(
        <main>
            {/* form component */}
            <div className="form">
                <input
                    type = 'text' 
                    placeholder= 'Top Text' 
                    className = 'input-form' 
                    name = 'topText'
                    value = {meme.topText}
                    onChange = {handleChange}
                    />
                <input 
                    type = 'text' 
                    placeholder= 'Botton Text' 
                    className = 'input-form' 
                    name = 'bottomText'
                    value = {meme.bottomText}
                    onChange = {handleChange}
                />

                <button className = 'button-form' onClick = {getMemeImage}>Get a New Meme Image</button>
            </div>

            {/* meme images and text */}
            <div className="meme">
                <center><img src = {meme.randomImage} className = 'meme-image'/></center>
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>

        </main>
    )
}

export default Meme