import "../../assets/css/CssComponents/main.css";
import ComicsCard from "../comics/ComicsCard";
import comics from "../../assets/data/comics.js";

export default function Main() {
  return (
    <div id="main">
      <div className="main-content">
        <div className="jumbotron"></div>
        <div className="series container">
          <div className="section-title">current series</div>
        </div>
        <div className="comics-gallery container">
          <div className="row">
            {comics.map((comic) => (
              <ComicsCard comic={comic} key={comic.id} />
            ))}
          </div>
        </div>
        <div className="load-more">
          <button className="btn">Load more</button>
        </div>
      </div>
    </div>
  );
}
