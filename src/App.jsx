import { useState } from "react"
import Navbar from "../component/Navbar"
import TextForm from "../component/TextForm"
import About from "../component/About"
function App() {
  return (
    <>
      {/* <Navbar title="TextUtils" abouttext="About TextUtils"/> */}
      <Navbar title="TextUtils"/>
      <div className="container">
      <TextForm title="TextBox" heading="Enter the text to analyze"/>
      <About/>

      </div>
    </>
  )
}

export default App
