// * LAYOUT COMPONENTS
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";
import Messages from "./components/layout/Messages";
import Widget from "./components/layout/widget";

// * IMPORT
import comics from "./assets/data/comics.js";
import HeaderLinks from "./assets/data/headerLinks.js";

console.log(HeaderLinks);

export default function App() {
  return (
    <>
      <Header HeaderLinks={HeaderLinks} />
      <Messages />
      <Main comics={comics} />
      <Widget />
      <Footer />
    </>
  );
}
