import Alert from "../ui/Alert";

export default function Messages() {
  const hasError = false;

  return (
    <div id="messages">
      <div className="container">
        {hasError && (
          <Alert type="danger">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, amet.
          </Alert>
        )}
      </div>
    </div>
  );
}
