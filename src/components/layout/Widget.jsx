import "../../assets/css/components/widget.css";

export default function Widget() {
  return (
    <div className="widget">
      <div className="widget-content container">
        <div className="row">
          <div className="col-1-5">
            <img src="../src/assets/img/buy-comics-digital-comics.png" alt="" />
            <span>digital comics</span>
          </div>
          <div className="col-1-5">
            <img src="../src/assets/img/buy-comics-merchandise.png" alt="" />
            <span>dc merchandise</span>
          </div>
          <div className="col-1-5">
            <img src="../src/assets/img/buy-comics-subscriptions.png" alt="" />
            <span>subscription</span>
          </div>
          <div className="col-1-5">
            <img src="../src/assets/img/buy-comics-shop-locator.png" alt="" />
            <span>comic shop locator</span>
          </div>
          <div className="col-1-5">
            <img src="../src/assets/img/buy-dc-power-visa.svg" alt="" />
            <span>dc power visa</span>
          </div>
        </div>
      </div>
    </div>
  );
}
