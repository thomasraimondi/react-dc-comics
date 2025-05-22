import "../../assets/css/CssComponents/comicscard.css";

export default function ComicsCard({ comic, id }) {
  return (
    <div className="col-1-6">
      <div className="card-comics">
        <div className="card-img">
          <img src={comic.thumb} alt="" />
        </div>
        <div className="card-title">{comic.series}</div>
      </div>
    </div>
  );
}
