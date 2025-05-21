import "../../assets/css/components/header.css";

export default function Header() {
  return (
    <div id="header">
      <div className="header-content container">
        <div className="logo">
          <img src="../src/assets/img/dc-logo.png" alt="" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">characters</a>
              <div className="border"></div>
            </li>
            <li>
              <a href="#">comics</a>
              <div className="border"></div>
            </li>
            <li>
              <a href="#">movies</a>
              <div className="border"></div>
            </li>
            <li>
              <a href="#">tv</a>
              <div className="border"></div>
            </li>
            <li>
              <a href="#">games</a>
              <div className="border"></div>
            </li>
            <li>
              <a href="#">collectibes</a>
              <div className="border"></div>
            </li>
            <li>
              <a href="#">videos</a>
              <div className="border"></div>
            </li>
            <li>
              <a href="#">fans</a>
              <div className="border"></div>
            </li>
            <li>
              <a href="#">news</a>
              <div className="border"></div>
            </li>
            <li>
              <a href="#">shop</a>
              <div className="border"></div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
