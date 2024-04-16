import React, { useState, useEffect } from 'react';

const Colorcode = () => {
    // State for storing the correct color code
    const [correctColor, setCorrectColor] = useState("");
    const [random_colors, setrandom_colors] = useState([]);
  
    // State for storing the user's selection
    const [selectedColor, setSelectedColor] = useState(null);
  
    // Function to generate a random color code
   function generateRandomColor() {
     
    const colors = [];
    for (let i = 0; i < 3; i++) {
      const number = '#' + Math.floor(Math.random() * 16777215).toString(16);
      colors.push(number);
    }
    setrandom_colors(colors);
     const n = Math.floor(Math.random()*3);
     console.log(n);
    console.log(colors);
     setCorrectColor(colors[n]);
    return colors;
  }
   useEffect(()=>{
        generateRandomColor();
   }, [])
    //
    
    
    // Function to handle user selection
    function handleColorSelection(color) {
      console.log("result", color );
      setSelectedColor(color);
    }
  
    // Function to handle play again button click
    function handlePlayAgain() {
      setSelectedColor(null);
     generateRandomColor();
    }
  
    // Render the component
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1>Color Codes</h1>
        {/* Display the random color code */}
        <h2>{correctColor}</h2>
        <h2>What color is this?</h2>
        {/* Display colored boxes for user selection */
        }
        <div data-testid="color-container">
          {
           
            random_colors.map((color, index) => (
            <div
              key={index}
              style={{
                width: '100px',
                height: '100px',
                background: color,
                margin: '10px',
                cursor: 'pointer',
                border: '2px solid white',
              }}
              onClick={() => handleColorSelection(color)}
              data-testid={
                color === correctColor ? 'correct-color' : 'incorrect-color'
              }
            ></div>
          ))}
        </div>
        {/* Display message based on user selection */}
        {selectedColor && (
          <div>
            <p>{selectedColor === correctColor ? 'Correct!' : 'Incorrect!'}</p>
            <button style={{border:"none", padding:"10px", backgroundColor:"red", color:"white", borderRadius:"5px" }} onClick={handlePlayAgain}>Play Again</button>
          </div>
        )}
      </div>
    );
  

}

export default Colorcode;

