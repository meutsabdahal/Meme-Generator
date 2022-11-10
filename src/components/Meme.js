
function Meme() {
    return(
        <main>
            {/* form component */}
            <form className="form">
                <input type = 'text' placeholder= 'Top Text' className = 'input-form' />
                <input type = 'text' placeholder= 'Botton Text' className = 'input-form' />
                <button className = 'button-form'>Get a New Meme Image</button>
            </form>
        </main>
    )
}

export default Meme