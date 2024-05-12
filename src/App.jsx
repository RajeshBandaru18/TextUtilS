import { useState } from "react";
import Navbar from "../component/Navbar";
import TextForm from "../component/TextForm";
import About from "../component/About";
import Alert from "../component/Alert";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null)
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
      {/* <Navbar title="TextUtils" abouttext="About TextUtils"/> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <TextForm
          showAlert={showAlert}
          title="TextBox"
          heading="Enter the text to analyze"
          mode={mode}
        />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
