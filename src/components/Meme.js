import React from "react";
import memesData from "../memesData";

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"})

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function generateMeme(event) {
        const memesArray = allMemeImages.data.memes
        let randomNumber = Math.floor(Math.random()*memesArray.length)
        console.log(memesArray[randomNumber].url);
        console.log(event.target.value);
        setMeme(prevState => {
            return {
            ...prevState,
            randomImage: memesArray[randomNumber].url,
            [event.target.name]: event.target.value,
        }})
        }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(meme);
    }
    
    return (
        <main className="input-container" >
            <form onSubmit={handleSubmit}>
                <div className="input-text">
                    <input
                        name="topText"
                        value={setMeme.topText}
                        placeholder="Top of meme"
                        className="input-input"
                        onChange={generateMeme}
                    />
                    <input
                        name="bottomText"
                        value={setMeme.bottomText}
                        placeholder="Bottom of meme"
                        className="input-input"
                        onChange={generateMeme}
                    />
                    <button
                        onClick={generateMeme}
                        className="input-generate-button">
                        Get a new meme image
                    </button>
                </div>
                <div className="meme-cont">
                    <img
                        onChange={generateMeme}
                        className="meme-img"
                        name="randomImage"
                        value={meme.randomImage}
                        src={meme.randomImage}
                    />
                    <h2 className="meme-text top"></h2>
                    <h2 className="meme-text bottom"></h2>
                </div>
            </form>
        </main>
    )
}

