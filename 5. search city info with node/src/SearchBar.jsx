import { useState } from "react";



export default function SearchBar() {

  const [city, setCity] = useState("");

  
  return (
    <div className="flex flex-col min-h-screen items-center justify-center text-white">

      <h1 className="text-5xl font-bold text-amber-600">Enter city name:</h1>

      <input 
      type="text"
      value={city}
      onChange={(e)=> setCity(e.target.value)}
      className="border p-2 rounded-t-full mt-15 w-150 h-20 
                text-center text-amber-500 
                text-3xl font-mono"
      />


      <button className="mt-3 bg-amber-500 w-150 h-20 rounded-b-full text-red-600 text-4xl font-serif">
        s e a r c h
      </button>

    </div>
  );
}
