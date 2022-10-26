import { useState } from "react";
import CangerAbuse from "./button/button";

export default function CheckRender({ count, ChangeAbuse }) {
  let [todayDay] = useState(new Date().toDateString());
  let [oldDay] = useState(localStorage.getItem("date") || "poh");

  let btnText = "Change my name";
  if (count === 1) {
    btnText = "Put it";
  }
  if (count < 4 && oldDay !== todayDay) {
    return <CangerAbuse event={ChangeAbuse}>{btnText}</CangerAbuse>;
  }
  return (
    <>
      <h2>until midnight.</h2>
      <p>U have to wait.</p>
    </>
  );
  // return <CangerAbuse event={ChangeAbuse}>Change my name</CangerAbuse>;
}
