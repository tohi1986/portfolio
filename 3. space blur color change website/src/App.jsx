import { useState } from "react";
import Image from "./components/Image";
import ImageControls from "./components/ImageControls";
import ColorPicker from "./components/ColorPicker";


export default function App() {
  const [blur, setBlur] = useState(0);
  const[scale,setScale] = useState(1.15);
  const[background, setBackground] = useState("bg-blue-300");

  return (
    <div className="flex flex-col items-center justify-center mt-5 space-y-6">
  <div className="flex items-center space-x-6">
    <ImageControls
      blur={blur}
      setBlur={setBlur}
      scale={scale}
      setScale={setScale}
    />
    <ColorPicker background={background} setBackground={setBackground} />
  </div>

  <Image blur={blur} scale={scale} background={background} />
</div>

  )

}
