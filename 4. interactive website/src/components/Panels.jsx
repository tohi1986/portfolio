import pic1 from "../assets/images/peakpx.jpg";
import pic2 from "../assets/images/678852.jpg";
import pic3 from "../assets/images/914670.jpg";
import pic4 from "../assets/images/pic4.jpg";
import pic5 from "../assets/images/pic5.jpg";
import pic6 from "../assets/images/pic6.jpg";

export default function Panels({ collapsed }) {

  const panelWidth = collapsed ? "w-16" : "w-50";

  return (
    <div>
      {/* LEFT SIDE PANELS */}
      <div className="fixed top-0 bottom-0 left-0 flex">
        <div className={`relative ${panelWidth} transition-all duration-700 ease-out delay-100`}>
          <img src={pic1} alt="panel pic" className="w-full h-full object-cover"/>
          <span className={`absolute inset-0 flex items-center justify-center text-white text-4xl font-bold transition-opacity duration-500 ${collapsed ? "opacity-0" : "opacity-100"}`}>
            html
          </span>
        </div>

        <div className={`relative ${panelWidth} transition-all duration-700 ease-out delay-200`}>
          <img src={pic2} alt="panel pic 2" className="w-full h-full object-cover"/>
          <span className={`absolute inset-0 flex items-center justify-center text-white text-3xl font-bold transition-opacity duration-500 ${collapsed ? "opacity-0" : "opacity-100"}`}>
            java script
          </span>
        </div>

        <div className={`relative ${panelWidth} transition-all duration-700 ease-out delay-300`}>
          <img src={pic3} alt="panel pic 3" className="w-full h-full object-cover"/>
          <span className={`absolute inset-0 flex items-center justify-center text-white text-4xl font-bold transition-opacity duration-500 ${collapsed ? "opacity-0" : "opacity-100"}`}>
            react
          </span>
        </div>
      </div>

      {/* RIGHT SIDE PANELS */}
      <div className="fixed top-0 bottom-0 right-0 flex">
        <div className={`relative ${panelWidth} transition-all duration-700 ease-out delay-100`}>
          <img src={pic4} alt="panel pic 4" className="w-full h-full object-cover"/>
          <span className={`absolute inset-0 flex items-center justify-center text-white text-4xl font-bold transition-opacity duration-500 ${collapsed ? "opacity-0" : "opacity-100"}`}>
            tailwind
          </span>
        </div>

        <div className={`relative ${panelWidth} transition-all duration-700 ease-out delay-200`}>
          <img src={pic5} alt="panel pic 5" className="w-full h-full object-cover"/>
          <span className={`absolute inset-0 flex items-center justify-center text-white text-4xl font-bold transition-opacity duration-500 ${collapsed ? "opacity-0" : "opacity-100"}`}>
            vite
          </span>
        </div>

        <div className={`relative ${panelWidth} transition-all duration-700 ease-out delay-300`}>
          <img src={pic6} alt="panel pic 6" className="w-full h-full object-cover"/>
          <span className={`absolute inset-0 flex items-center justify-center text-white text-4xl font-bold transition-opacity duration-500 ${collapsed ? "opacity-0" : "opacity-100"}`}>
            node
          </span>
        </div>
      </div>
    </div>
  );
}
