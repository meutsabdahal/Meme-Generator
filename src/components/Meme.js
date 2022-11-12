import React from 'react';

import memesData from '../memesData.js'


function Meme() {

    const [memeImage, setMemeImage] = React.useState('')

    // function to randomly generate meme images
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const random = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[random].url)

    }

    return(
        <main>
            {/* form component */}
            <div className="form">
                <input type = 'text' placeholder= 'Top Text' className = 'input-form' />
                <input type = 'text' placeholder= 'Botton Text' className = 'input-form' />

                <button className = 'button-form' onClick = {getMemeImage}>Get a New Meme Image</button>
            </div>

        <center><img src = {memeImage} className = 'meme-image'/></center>
        </main>
    )
}

export default Meme