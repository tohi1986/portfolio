
export default function Image({blur,scale, background}){

  return (

    <div className={`${background} w-[1600px] h-[700px] flex items-center 
    justify-center mt-5`}>
      
      <img 
      src="/1327816.jpeg" 
      alt="ghost in the shell" 
      className="w-[1000px] h-[600px]"
      style={{filter:`blur(${blur}px)`,transform:`scale(${scale})`}}
      />
    </div>

  )
}
