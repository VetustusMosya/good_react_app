import "./button.module.css";

export default function Button(props) {
  return (
    <button onClick={() => props.event(props.id)}>{props.children}</button>
  );
}
