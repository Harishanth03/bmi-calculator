import { useState } from 'react'
import './App.css'

function App() {

  const [height , setHeight] = useState("");

  const [weight , setWeight] = useState("");

  const [bmi , setBmi] = useState(null);

  const [status , setStatus] = useState("");

  const [error , setError] = useState("");

  const calculateBMI = () =>{



    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight);

    if(isValidHeight && isValidWeight)
    {

      const heightToMeter = height / 100;

      const bmiValue = weight / (heightToMeter * heightToMeter);

      setBmi(bmiValue.toFixed(2));

      if(bmiValue < 18.5)
      {
        setStatus("Under Weight")
      }
      else if(bmiValue >= 18.5 && bmiValue <= 22.9)
      {
        setStatus("Normal Weight")
      }
      else if(bmiValue >= 23 && bmiValue <= 24.9)
      {
        setStatus("Over Weight");
      }
      else
      {
        setStatus("Obese");
      }

    }
    else
    {

      setBmi(null);

      setStatus("");

      setError("Please Enter the valied height and weight");

    }

  }

  const clear = () => 
  {
    setHeight("");

    setWeight("");

    setBmi(null);

    setStatus("");

    setError("");
  }

  return (

    <>

      <div className="bmi-container">

        <div className="box">

        </div>

        <div className="data">

          <h1>BMI Calculator</h1>

          <div className="input-container">

            <label htmlFor="Height">Height (cm)</label>

            <input type="text" id='Height' value={height} onChange={(e) => setHeight(e.target.value)}/>

            {error && <p className='error'>{error}</p>}

          </div>

          <div className="input-container">

            <label htmlFor="Weight">Weight (Kg)</label>

            <input type="text" id='Weight' value={weight} onChange={(e) => setWeight(e.target.value)}/>
            
          </div>

          <div className="button-div">

            <button onClick={calculateBMI}>Calculate BMI</button>

            <button onClick={clear}>Clear</button>

          </div>
          

          {bmi !== null && (

            <div className="results">
                        
            <p>Your BMI is: {bmi}</p>

            <p>Status: {status}</p>

            </div>
          )}

        </div>

      </div>

    </>

  )

}

export default App
