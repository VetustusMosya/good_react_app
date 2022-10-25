import "./button.module.css";

export default function Button(props) {
  return <button onClick={props.event}>{props.children}</button>;
}
