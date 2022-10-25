import { useState } from "react";
import Random from "../random";
import CangerAbuse from "../button/button";

import styles from "./App.module.css";

export default function App() {
  let [count, setCount] = useState(1);
  // const [enough, changeEnough] = useState();

  const ChangeAbuse = () => {
    setCount(++count);
  };

  return (
    <div className={styles.app}>
      <h1>Today u are</h1>
      <Random />
      {count < 4 ? (
        <CangerAbuse event={ChangeAbuse}>Change my name</CangerAbuse>
      ) : (
        <>
          <h2>until midnight.</h2>
          <p>U have to wait.</p>
        </>
      )}
    </div>
  );
}
