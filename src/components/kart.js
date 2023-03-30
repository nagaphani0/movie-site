import { Link } from "react-router-dom";

export function Kard(props) {
  return (
    <>
      <div className="col-sm-6 col-md-6 col-lg-3">
        <div className="food-card food-card" key={props.id}>
          <div className="food-card_img">
            <a href="#!">
              <i className="fa fa-heart"></i>

              <img
                src={
                  "https://th.bing.com/th/id/R.32720a9bdbff64a8f04fbebcd53efa49?rik=zXCj2FsB%2fTQwlA&pid=ImgRaw&r=0" ||
                  props.logo.medium
                }
                alt="img"
                style={{ width: "200px", height: "200px" }}
              />
            </a>
          </div>
          <div className="food-card_content">
            <div className="food-card_title-section">
              <a href="#!" className="food-card_title">
                {props.title}
              </a>
              <a href="#" className="food-card_author">
                {/* {props.description} */}
              </a>
            </div>
            <div className="food-card_bottom-section">
              <div className="space-between">
                <div>
                  <span className="fa fa-fire"></span>
                </div>
                <div className="pull-right">
                  <span className="badge badge-success">{props.genres}</span>
                </div>
              </div>
              <div className="space-between">
                <div className="food-card_price">
                  <span></span>
                </div>
                <div className="food-card_order-count">
                  <div className="input-group mb-3">
                    <div className="input-group-append">
                      <Link
                        to={`/movie/${props.id}`}
                        className="btn btn-outline-secondary add-btn"
                        type="button"
                        id="button-addon1">
                        View More
                        <i className="fa fa-plus"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
