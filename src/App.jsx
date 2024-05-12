import { useState } from "react"
import Navbar from "../component/Navbar"
import TextForm from "../component/TextForm"
import About from "../component/About"
function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = ()=>{
    if(mode == "dark"){
      setMode("light")
      document.body.style.backgroundColor = "white"
    }else{
      setMode("dark")
      document.body.style.backgroundColor = "#140e39"
    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" abouttext="About TextUtils"/> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <div className="container">
      <TextForm title="TextBox" heading="Enter the text to analyze" mode={mode}/>
      {/* <About/> */}

      </div>
    </>
  )
}

export default App
