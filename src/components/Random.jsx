export default function Random(length) {
  return childRandom(length);
}

function childRandom(length) {
  let randomInt = Math.floor(Math.random() * length);
  let old = +localStorage.getItem("int");
  if (randomInt !== old) {
    localStorage.setItem("int", randomInt);
    return randomInt;
  } else {
    return childRandom(length);
  }
}
