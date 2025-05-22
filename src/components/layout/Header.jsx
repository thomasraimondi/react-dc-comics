import "../../assets/css/CssComponents/header.css";
import Logo from "./Logo";
import Navbar from "./Navbar";

export default function Header({ HeaderLinks }) {
  console.log(HeaderLinks);

  return (
    <div id="header">
      <div className="header-content container">
        <Logo />
        <Navbar links={HeaderLinks} />
      </div>
    </div>
  );
}
