// import

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

export default function RenderAbuse({ count }) {
  let randomText = "";
  if (count >= 4) {
    randomText = "hui ";
  }
  switch (Random()) {
    case 0:
      randomText += "nothing";
      break;
    case 1:
      randomText += "PIDOR";
      break;
    case 2:
      randomText += "ASSHOLE";
      break;
    case 3:
      randomText += "GAY";
      break;
    case 4:
      randomText += "SHIT";
      break;
    default:
      randomText += "broke";
      break;
  }
  return <h3>{randomText}</h3>;
}
