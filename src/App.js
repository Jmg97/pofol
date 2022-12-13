import Example from './example';
import './App.css';
import { Header } from './components/Header';
import styled from "styled-components";


function App() {

  return (
    <div className="App">
      <Header></Header>
      <bodyWrap>
      <Example></Example>
      </bodyWrap>
    </div>
  );
}

export default App;

const bodyWrap = styled.div`
width:100%;
max-width:60%
`