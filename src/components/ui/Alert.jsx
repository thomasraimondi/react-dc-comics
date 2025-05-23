import "../../assets/css/CssComponents/alert.css";

export default function Alert({ type, children }) {
  if (!children) return <></>;

  return <div className={`alert alert-${type || "danger"}`}>{children}</div>;
}
