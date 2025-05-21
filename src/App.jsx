import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";
import Messages from "./components/layout/Messages";
import Widget from "./components/layout/widget";

export default function App() {
  return (
    <>
      <Header />
      <Messages />
      <Main />
      <Widget />
      <Footer />
    </>
  );
}
