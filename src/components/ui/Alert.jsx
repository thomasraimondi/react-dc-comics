export default function Alert({ type, text }) {
  return (
    <div className="container">
      <div className={`alert alert-${type}`}>{text}</div>
    </div>
  );
}
