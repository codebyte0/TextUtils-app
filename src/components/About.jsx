import React, { useState } from 'react';
import Navbar from './Navbar';

const About = () => {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message) => {
    setAlert(message);
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("Dark mode has been enabled");
    } else {
      setMode("light");
      showAlert("Light mode has been enabled");
    }
  };

  return (
    <div className="con">
      <Navbar title="Text-Edit" head="Home" num="3" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <div className="accordion" id="accordionExample">
          About us
        </div>
      </div>
      {alert && <div className="alert">{alert}</div>}
    </div>
  );
}

export default About;
