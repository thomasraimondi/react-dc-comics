import Widget from "./widget";

export default function Footer() {
  return (
    <div id="footer">
      <div className="footer-content container">
        <div className="footer-menu">
          <div className="col-1-3">
            <h2>dc comics</h2>
            <ul>
              <li>
                <a href="#">ciao</a>
              </li>
              <li>
                <a href="#">ciao</a>
              </li>
              <li>
                <a href="#">ciao</a>
              </li>
              <li>
                <a href="#">ciao</a>
              </li>
              <li>
                <a href="#">ciao</a>
              </li>
              <li>
                <a href="#">ciao</a>
              </li>
              <li>
                <a href="#">ciao</a>
              </li>
            </ul>
            <h2>shop</h2>
            <ul>
              <li>
                <a href="#">ciao</a>
              </li>
              <li>
                <a href="#">ciao</a>
              </li>
            </ul>
          </div>
          <div className="col-1-3">
            <h2>dc</h2>
            <ul>
              <li>
                <a href="#">ciao</a>
              </li>
              <li>
                <a href="#">ciao</a>
              </li>
              <li>
                <a href="#">ciao</a>
              </li>
              <li>
                <a href="#">ciao</a>
              </li>
              <li>
                <a href="#">ciao</a>
              </li>
              <li>
                <a href="#">ciao</a>
              </li>
              <li>
                <a href="#">ciao</a>
              </li>
            </ul>
          </div>
          <div className="col-1-3">
            <h2>sites</h2>
            <ul>
              <li>
                <a href="#">ciao</a>
              </li>
              <li>
                <a href="#">ciao</a>
              </li>
              <li>
                <a href="#">ciao</a>
              </li>
              <li>
                <a href="#">ciao</a>
              </li>
              <li>
                <a href="#">ciao</a>
              </li>
              <li>
                <a href="#">ciao</a>
              </li>
              <li>
                <a href="#">ciao</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-logo">
          <img src="../src/assets/img/dc-logo-bg.png" alt="" />
        </div>
        <div className="footer-social">
          <div className="footer-social-content container">
            <button> sign-up now!</button>
            <div className="social-links">
              <span>follow us</span>
              <img
                src="../src/assets/img/footer-facebook.png"
                alt=""
                srcset=""
              />
              <img
                src="../src/assets/img/footer-twitter.png"
                alt=""
                srcset=""
              />
              <img
                src="../src/assets/img/footer-youtube.png"
                alt=""
                srcset=""
              />
              <img
                src="../src/assets/img/footer-pinterest.png"
                alt=""
                srcset=""
              />
              <img
                src="../src/assets/img/footer-periscope.png"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
        <Widget />
      </div>
    </div>
  );
}
