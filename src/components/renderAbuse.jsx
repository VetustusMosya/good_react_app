export default function RenderAbuse({ arrAbuse, num }) {
  if (num === 0) {
    return <h3>?</h3>;
  }
  return <h3>{arrAbuse[num]}</h3>;
}
