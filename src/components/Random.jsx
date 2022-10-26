export default function Random(length) {
  // debugger;
  let randomInt = Math.floor(Math.random() * (length - 1));
  while (randomInt === +localStorage.getItem("int")) {
    randomInt = Math.floor(Math.random() * (length - 1));
    console.log(randomInt);
  }
  localStorage.setItem("int", randomInt);
  return randomInt;

  // if (randomInt !== +localStorage.getItem("int")) {
  //   localStorage.setItem("int", randomInt);
  //   console.log("random " + randomInt);
  //   return randomInt;
  // } else {
  //   localStorage.setItem("int", randomInt);
  //   console.log("false");
  //   return childRandom(length);
  // }
}
