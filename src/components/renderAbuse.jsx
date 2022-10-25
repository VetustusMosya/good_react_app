export default function RenderAbuse({ num }) {
  let randomText = "";
  switch (num) {
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
