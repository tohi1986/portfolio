import { useState } from "react";
import MainImage from "./components/MainImage";
import Panels from "./components/panels";

export default function App() {
  const[collapsed, setCollapsed]=useState(false);


  return (
  <div>
    <MainImage collapsed={collapsed} setCollapsed={setCollapsed}/>
    <Panels collapsed={collapsed} />
  </div>
  )
}
