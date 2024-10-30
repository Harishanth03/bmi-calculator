import { useState } from 'react'
import './App.css'

function App() {

  const [height , setHeight] = useState(164);

  const [weight , setWeight] = useState(60);

  const [bmi , setBmi] = useState(null);

  const [status , setStatus] = useState("");

  return (

    <>

      <div className="bmi-container">

        <div className="box">

        </div>

        <div className="data">

          <h1>BMI Calculator</h1>

          <div className="input-container">

            <label htmlFor="Height">Height (cm)</label>

            <input type="text" id='Height' value={height}/>

          </div>

          <div className="input-container">

            <label htmlFor="Weight">Weight (Kg)</label>

            <input type="text" id='Weight' value={weight}/>
            
          </div>

          <div className="button-div">

            <button>Calculate BMI</button>

            <button>Clear</button>

          </div>
          

          <div className="results">
            
            <p>Your BMI is: {bmi}</p>

            <p>Status: {status}</p>

          </div>

        </div>

      </div>

    </>

  )

}

export default App
