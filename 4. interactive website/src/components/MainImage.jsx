import mainImg from "../assets/images/bacground.jpg"

export default function MainImage({ collapsed, setCollapsed }) {

  const handleClick = () => { setCollapsed(!collapsed) }

  return (
    <div
      className="bg-amber-700 relative h-screen w-screen"
      onClick={handleClick}
    >
      <img
        src={mainImg}
        alt="background pic"
        className="h-full w-full object-cover"
      />

      {/* Glavna riječ Stack */}
      <span className="absolute inset-0 flex items-center justify-center text-amber-400 text-7xl font-bold">
        S t a c k 
      </span>

      {/* Tekst iznad Stack-a */}
      <span
        className={`absolute top-1/4 left-1/2 -translate-x-1/2
                    text-amber-400 text-7xl font-bold
                    transition-all duration-1500
                    ${collapsed ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}
      >
        F u l l
      </span>

      {/* Tekst ispod Stack-a */}
      <span
        className={`absolute bottom-1/4 left-1/2 -translate-x-1/2
                    text-amber-400 text-7xl font-bold
                    transition-all duration-1500
                    ${collapsed ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
      >
        P r o g r a m m e r
      </span>
    </div>
  );
}
