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
        console.log(allMemeImages);
        setMeme(prevState => ({
            ...prevState,
            randomImage: memesArray[randomNumber].url
        }))
        }

        function handleChange(event) {
            const {name, value} = event.target
            setMeme(prevState => ({
                ...prevState,
                [name]: value
            }))
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
                        value={meme.topText}
                        placeholder="Top of meme"
                        className="input-input"
                        onChange={handleChange}
                    />
                    <input
                        name="bottomText"
                        value={meme.bottomText}
                        placeholder="Bottom of meme"
                        className="input-input"
                        onChange={handleChange}
                    />
                    <button
                        onClick={generateMeme}
                        className="input-generate-button">
                        Get a new meme image
                    </button>
                </div>
                <div className="meme-cont">
                    <img
                        className="meme-img"
                        name="randomImage"
                        value={meme.randomImage}
                        src={meme.randomImage}
                    />
                    <h2 className="meme-text top">{meme.topText}</h2>
                    <h2 className="meme-text bottom">{meme.bottomText}</h2>
                </div>
            </form>
        </main>
    )
}

