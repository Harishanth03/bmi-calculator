import './App.css'

function App() {

  return (

    <>

      <div className="bmi-container">

        <div className="box">

        </div>

        <div className="data">

          <h1>BMI Calculator</h1>

          <div className="input-container">

            <label htmlFor="Height">Height (cm)</label>

            <input type="text" id='Height'/>

          </div>

          <div className="input-container">

            <label htmlFor="Weight">Weight (Kg)</label>

            <input type="text" id='Weight'/>
            
          </div>

          <div className="button-div">

            <button>Calculate BMI</button>

            <button>Clear</button>

          </div>
          

          <div className="results">
            
            <p>Your BMI is: 30</p>

            <p>Status: Over Weight</p>

          </div>

        </div>

      </div>

    </>

  )

}

export default App
