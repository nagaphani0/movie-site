import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Kard } from "./kart";
import ReactLoading from "react-loading";

export default function MainScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/search/shows?q=all`)
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <section className="main-content">
        <div className="container-fluid">
          <div className="row">
            {isLoading ? (
              <ReactLoading
                type={"spin"}
                color={"#123abc"}
                height={60}
                width={60}
              />
            ) : (
              data.map((movie) => (
                <Kard
                  title={movie.show.name}
                  id={movie.show.id}
                  // logo={movie.show.image.medium}
                  genres={movie.show.genres}
                  rating={movie.show.rating.average}
                />
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}
