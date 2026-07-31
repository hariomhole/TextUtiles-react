import react,{ useState } from 'react'

import './App.css'
import Navbar from './assets/Component/Navbar';
import TextBox from './assets/Component/TextBox';
import Alert from './assets/Component/Alert';
// import { nominalTypeHack } from 'prop-types';
// import AboutUs from './assets/Component/AboutUs';

// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Link
// } from "react-router-dom";




function App() {
  const [mode, setMode] = useState("light");
  const [Text , setText] = useState("Light");
  const [alert , setAlert] = useState(null);

  const showAlert = (message , type) => {
   setAlert({
    msg:message,
    type:type
   })

   setTimeout(() => {
    setAlert(null);
   }, 1000);
  }



  const Togglemode = () =>{
if(mode === "light")
{
  setMode("dark");
  setText("Dark");
  document.body.style.backgroundColor = "#000000";
 showAlert("Dark mode has been enabled","success");
 document.title = "Text - Dark Mode";
}
else{
  setMode("light");
  setText("Light");
   document.body.style.backgroundColor = "white";
   document.title = "Text - Light Mode";
    showAlert("Light mode has been enabled","success");
}

  }
  return (
    <>
   
   {/* <Router> */}
    <Navbar title="TextUtiles"  mode={mode} data={Text} togglemode={Togglemode}></Navbar>
    <Alert alert={alert}></Alert>

    <div className="container my-4">
      <TextBox  showAlert={showAlert} mode={mode} ></TextBox>
      {/* <AboutUs mode={mode} showAlert={showAlert} ></AboutUs> */}
      
      {/* <Switch>
  <Route exact path="/home" render={() => <TextBox showAlert={showAlert} mode={mode} />} />
  <Route exact path="/about"  render={() => <AboutUs mode={mode} showAlert={showAlert} ></AboutUs>} />
</Switch>  */}


    </div>
   {/* </Router> */}
    </>
  )
}

export default App
