import DrumButton from "./DrumButton";

function DrumKit() {

    // array    for     mapping     sounds,     text     and    color's     for     button's

    const drumSounds = [
        { id:1, text: "Crash", sound: "sounds/crash.mp3", color: "bg-red-500", keySwitch:"a"},
        { id:2, text: "Kick", sound: "sounds/kick-bass.mp3", color: "bg-blue-500", keySwitch:"s"},
        { id:3, text: "snare", sound: "sounds/snare.mp3", color: "bg-pink-500", keySwitch:"d"},
        { id:4, text: "tom-1", sound: "sounds/tom-1.mp3", color: "bg-yellow-500", keySwitch:"f"},
        { id:5, text: "tom-2", sound: "sounds/tom-2.mp3", color: "bg-green-600", keySwitch:"j"},
        { id:6, text: "tom-3", sound: "sounds/tom-3.mp3", color: "bg-purple-500", keySwitch:"k"},
        { id:7, text: "tom-4", sound: "sounds/tom-4.mp3", color: "bg-emerald-300", keySwitch:"l"},
    ]
    return (
        <div className="bg-amber-500 w-screen h-screen flex justify-center items-center">

{    /* here     we      mapping     all     button's    together    */}

        {drumSounds.map((textSoundColor) => (
            <DrumButton
                key={textSoundColor.id}
                sound={textSoundColor.sound}
                label={textSoundColor.text}
                color={textSoundColor.color}
                keySwitch={textSoundColor.keySwitch}
            />
            ))}
    

        </div>
    )
}


export default DrumKit;