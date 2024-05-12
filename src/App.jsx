import { useState } from "react"
import Navbar from "../component/Navbar"
import TextForm from "../component/TextForm"
function App() {
  return (
    <>
      {/* <Navbar title="TextUtils" abouttext="About TextUtils"/> */}
      <Navbar title="TextUtils"/>
      <div className="container">
      <TextForm title="TextBox" heading="Enter the text to analyze"/>

      </div>
    </>
  )
}

export default App
