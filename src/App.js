import logo from './logo.svg';
import './App.css';
import styled, {keyframes} from 'styled-components';
import Myheading from './components/Myheading';
import { useState } from 'react';

const AppWrapper = styled.div`
width:100%;
min-height:100vh;
`;
const AppHeader = styled.div`
background-color: ${({theme})=>theme.colors.background_1};
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;`

const RotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Applogo = styled.img`
animation: ${RotateAnimation} infinite 20s linear;
height: 40vmin;
pointer-events: none;
`


function App() {
  const [changeColor, useChangeColor] = useState();
  console.log(changeColor);
  return (
    <AppWrapper>
      <AppHeader>
        <Myheading>ClockWise rotating:</Myheading>
        <Myheading fsize='30px'>react</Myheading>
        <Myheading fsize='20px'>styled</Myheading>
        <Myheading fsize='18px'>components</Myheading>
        <Applogo src={logo}  alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button>
          change background color
        </button>
      </AppHeader>
    </AppWrapper>
  );
}

export default App;
