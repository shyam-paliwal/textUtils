
import { useState } from 'react';
import './App.css';
import { About } from './component/About';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import Alert from './component/Alert';
import {
  BrowserRouter as Router,
  Route,
  // Link,
  Routes
} from "react-router-dom";


function App() {

  const [alert, setAlert] = useState(null)

  const showAlert=(massage, type)=>{
    setAlert({
      msg: massage,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  
  const [mode, setmode] = useState('light')

  const removeBodyClass=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    // document.body.classList.remove('bg-primary')

  }
  
  const toggleMode =(cls)=>{
    removeBodyClass();
    document.body.classList.add('bg-'+cls)
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("dark mode is enable", "success");
      // document.title="dark textUtils";
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode is enable", "success");
      // document.title="light textUtils";

    }
  }

  return (
      <div className="App">
      <Router>
        <Navbar title="textUtils" abouttext="About textUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
          
        <div className="my-3">
        <Routes>
          <Route path="/" element={<Textform heading="TextUtils - word counter, character counter, remove extra spaces" mode={mode} showAlert={showAlert}/>} />
          <Route path="/about" element={<About mode={mode}/>} />
        </Routes>
        </div>
      </Router>
      </div>
  );
}

export default App;
