import React from "react";
import memesData from "../memesData";

export default function Input() {
    function generateMeme() {
        const memesArray = memesData.data.memes
        let randomNumber = Math.floor(Math.random()*memesArray.length)
        console.log(memesArray[randomNumber].url);
        }

    const [things, setThings] = React.useState(["Item 1", "Item 2"])

    const thingsOk = things.map(item => 
        <p key={item}>{item}</p>)
    
    function addElement() {
        const newItem = `Item ${things.length + 1}`
        setThings(pervState => [...pervState, newItem])
        console.log(things);
    }
    
    return (
        <main className="input-container">
            <div className="input-text">
                <input placeholder="Top of meme" className="input-input"/>
                <input placeholder="Bottom of meme" className="input-input"/>
                <button onClick={addElement} className="input-generate-button">Get a new meme image</button>
                {thingsOk}
            </div>
        </main>
    )
}

