import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactLoading from "react-loading";

export default function SecondScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [movieData, setMovieData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => {
        setMovieData(response.data);
        console.log(movieData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <ReactLoading type={"spin"} color={"#123abc"} height={60} width={60} />
      ) : (
        <div className="container">
          <div className="col-lg-8 border p-3 main-section bg-white">
            <div className="row hedding m-0 pl-3 pt-0 pb-3">
              {movieData.name}
            </div>
            <div className="row m-0">
              <div
                className="col-lg-4 left-side-product-box pb-3"
                key={movieData.id}>
                <img src={movieData.image.medium} className="border p-3" />
              </div>
              <div className="col-lg-8">
                <div className="right-side-pro-detail border p-3 m-0">
                  <div className="row">
                    <div className="col-lg-12">
                      <span>Title</span>
                      <h2>{movieData.name}</h2>
                      <p className="m-0 p-0">language : {movieData.language}</p>
                    </div>
                    <div className="col-lg-12">
                      <p className="m-0 p-0 price-pro">
                        type :{movieData.type}
                      </p>
                      <hr className="p-0 m-0" />
                    </div>
                    <div className="col-lg-12 pt-2">
                      <h5>Movie Detail</h5>
                      <span>{movieData.summary}</span>
                      <hr className="m-0 pt-2 mt-2" />
                    </div>
                    <div className="col-lg-12">
                      <p className="tag-section">
                        <strong>Genres : </strong>
                        <a href="">{}</a>
                        <a href="">{movieData.genres}</a>
                      </p>
                    </div>
                    <div className="col-lg-12">
                      <h6>Rating : {movieData.rating.average}</h6>
                    </div>
                    <div className="col-lg-12 mt-3">
                      <div className="row">
                        <div className="col-lg-6 pb-2">
                          <a
                            href={movieData._links.previousepisode}
                            className="btn btn-danger text-white w-100">
                            Previous Episode
                          </a>
                        </div>
                        <div className="col-lg-6">
                          <a
                            href={movieData._links.nextepisode}
                            className="btn btn-success text-white w-100">
                            Next Episode
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
