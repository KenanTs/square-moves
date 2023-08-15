import React, { useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components';

const StyleBoard = styled.section`
  background-color: #F2C438;
  width: 16rem;
  height: 16rem;
  border: 1px solid red;
  position: relative;
`
const Square = styled.div`
  width: 1rem;
  height: 1rem;
  background: green;
  left: ${({ x }) => x+'rem'};
  top: ${({ y }) => y+'rem'};
  position: absolute;
  `

  function increment(x) {
    return x + 1;
  }

  function decrement(x) {
    return x - 1;
  }
  const actionXMap = {
    ArrowLeft: decrement,
    ArrowRight: increment
  }
  const actionYMap = {
    ArrowDown: increment,
    ArrowUp: decrement
  }

function App() {

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  function handleKeyPress(e){
    const actionX = actionXMap[e.key];
    const actionY = actionYMap[e.key];
    actionX && setX(actionX);
    actionY && setY(actionY);
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

  }, [])

  useEffect(() => {
    if (x >= 16) { setX(0) } 
    else if ( x <= -1) { setX(15) }

    if (y >= 16) { setY(0) }
    else if (y <= -1) { setY(15) }
  })

  return (
    <div className='app'>
      <StyleBoard onKeyUp={handleKeyPress}>
        <h4 className='header-style'>Hello</h4>
        <Square x={x} y={y}></Square>
      </StyleBoard>
    </div>
  );
}

export default App;
