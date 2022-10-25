import { useState } from "react";
import RenderAbuse from "../renderAbuse";
import CangerAbuse from "../button/button";

import styles from "./App.module.css";

export default function App() {
  let [count, setCount] = useState(1);
  let [num, changeNum] = useState(+localStorage.getItem("int") || Random());
  let [todayDay] = useState(new Date().toDateString());
  let [oldDay] = useState(localStorage.getItem("date") || "poh");

  function Random() {
    let randomInt = Math.floor(Math.random() * 4) + 1;
    if (randomInt !== +localStorage.getItem("int")) {
      localStorage.setItem("int", randomInt);
      return randomInt;
    } else {
      localStorage.setItem("int", randomInt);
      return Random();
    }
  }

  const ChangeAbuse = () => {
    setCount(++count);
    changeNum(Random());
    localStorage.setItem("date", new Date().toDateString());
  };

  const CheckRender = () => {
    if (count < 4) {
      if (oldDay !== todayDay) {
        return <CangerAbuse event={ChangeAbuse}>Change my name</CangerAbuse>;
      }
    }
    return (
      <>
        <h2>until midnight.</h2>
        <p>U have to wait.</p>
      </>
    );
  };

  return (
    <div className={styles.app}>
      <h1>Today u are</h1>
      <RenderAbuse num={num} />
      {CheckRender()}
    </div>
  );
}
