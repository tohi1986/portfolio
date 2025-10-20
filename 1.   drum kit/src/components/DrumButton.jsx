import { useEffect } from "react";


function DrumButton({ sound, label, color, keySwitch }) {

    const playSound = () => {
        const audio = new Audio(sound);
        audio.play();
    };

    useEffect(()=>{
        const handleKeyPress = (e) => {
            if (e.key === keySwitch) playSound()
        };



        window.addEventListener("keydown", handleKeyPress);
        return () => window.removeEventListener("keydown", handleKeyPress);
    },[keySwitch]);



    return (
        <button
            onClick={playSound}
            className={`w-40 h-40 m-2
         ${color} text-white text-2xl font-bold rounded-lg shadow-lg hover:bg-gray-700 active:scale-95 transition-transform`}>

            {label}

        </button>
    )
}

export default DrumButton;