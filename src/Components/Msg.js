export default function Msg({ onSetMsg, children }) {
  return (
    <div className="msgBox">
      <div className="innerBox">
        <h1>🌟 New Feature Added</h1>
        <p>{children}</p>
        <button onClick={() => onSetMsg((prev) => !prev)}>X</button>
      </div>
    </div>
  );
}
