import { useState } from "react";
import Navbar from "../component/Navbar";
import TextForm from "../component/TextForm";
import About from "../component/About";
import Alert from "../component/Alert";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
// import { Routes } from "react-router-dom/dist";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode == "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#140e39";
      showAlert("Dark Mode has been enabled", "success");
    }
  };

  return (
    <>
      <BrowserRouter>
        {/* <Navbar title="TextUtils" abouttext="About TextUtils"/> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About />}>
              
            </Route>
            <Route exact path="/" element={ <TextForm
                showAlert={showAlert}
                title="TextBox"
                heading="Enter the text to analyze"
                mode={mode}
              />}>
            </Route>
          </Routes>

          {/* <About/> */}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
