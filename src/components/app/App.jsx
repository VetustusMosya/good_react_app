import { useState } from "react";
import Random from "../random_pidor/random";
import CangerAbuse from "../button/button";
import Binding from "../binding/binding";

import styled from "styled-components";

const Greetings = styled.div`
  padding: 4em 0;
  background: papayawhip;
  text-align: center;
  color: palevioletred;
  h1 {
    font-size: 4em;
  }
  h2 {
    font-size: 3em;
  }
  h3 {
    font-size: 3.3em;
    color: #506e43;
    font-weight: 700;
  }
  input {
    width: 50%;
    font-size: 1.5em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  }
`;

function App({ subTitle }) {
  const [greet, changeGreet] = useState("Stranger");

  return (
    <Greetings>
      <h1>🤡 HI, {greet} 🤡</h1>
      <h2>{subTitle}</h2>
      <Random />
      <CangerAbuse />
      <Binding />
    </Greetings>
  );
}

export default App;
