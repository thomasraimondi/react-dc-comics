export default function Alert({ type, children }) {
  if (!children) return <></>;

  return (
    <div className="container">
      <div className={`alert alert-${type || "danger"}`}>{children}</div>
    </div>
  );
}
