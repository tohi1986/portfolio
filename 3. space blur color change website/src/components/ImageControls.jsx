export default function ImageControls({ blur, setBlur, scale, setScale }) {
  return (
    <div className="flex mt-5">
      
      <label className="flex items-center">
        <h1 className="text-3xl pr-4 ">Blur: {blur}px</h1>
        <input
          type="range"
          min="0"
          max="20"
          value={blur}
          onChange={(e) => setBlur(Number(e.target.value))}
          className="w-[100px]"
        />
      </label>

      <label className="flex items-center">
        <h1 className="text-3xl pr-4 ml-10">Scale: {scale}</h1>
        <input
          type="range"
          min="0.1"
          max="2"
          step="0.01"
          value={scale}
          onChange={(e) => setScale(Number(e.target.value))}
          className="w-[100px]"
        />
      </label>

    </div>
  );
}
