import React from "react";
import memesData from "../memesData";

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"})

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function generateMeme() {
        const memesArray = allMemeImages.data.memes
        let randomNumber = Math.floor(Math.random()*memesArray.length)
        console.log(memesArray[randomNumber].url);
        setMeme(prevState => {
            return {
            ...prevState,
            randomImage: memesArray[randomNumber].url}})
        }


    
    return (
        <main className="input-container">
            <div className="input-text">
                <input placeholder="Top of meme" className="input-input"/>
                <input placeholder="Bottom of meme" className="input-input"/>
                <button onClick={generateMeme} className="input-generate-button">Get a new meme image</button>
            </div>
            <div className="meme-cont">
                <img src={meme.randomImage} className="meme-img"/>
            </div>
        </main>
    )
}

