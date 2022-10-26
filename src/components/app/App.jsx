import { useState } from "react";
import Random from "../Random";
import CheckRender from "../ChackRender";
import RenderAbuse from "../RenderAbuse";

import styles from "./App.module.css";

export default function App({ arrAbuse }) {
  let [count, setCount] = useState(1);
  let [num, changeNum] = useState(+localStorage.getItem("int") || 0);

  const ChangeAbuse = () => {
    setCount(++count);
    changeNum(Random(arrAbuse.length));
    localStorage.setItem("date", new Date().toDateString());
  };

  return (
    <div className={styles.app}>
      <h1>Today u are</h1>
      <RenderAbuse arrAbuse={arrAbuse} num={num} />
      <CheckRender ChangeAbuse={ChangeAbuse} count={count} />
    </div>
  );
}
