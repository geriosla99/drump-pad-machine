import React from 'react'
import sounds from "./Sounds";
import DrumpPad from "./DrumpPad";

const DumpMachine = () => {
    console.log(sounds);
    const playAudio = audio => {
        const audioToPlay = new Audio(audio);
        audioToPlay.play();
    };
    return (
        <div id="drump-machine" className="container m-4 justify-content-center">
            <div id="display" className="container row border border-2 rounded">
                {sounds.map((sounds) => (
                    <DrumpPad 
                    key={sounds.id}
                    src={sounds.src} 
                    id={sounds.pad} 
                    handleClick={playAudio} />
                ))}
            </div>
        </div>
    )
}

export default DumpMachine
