import Card from "../src/components/Card";
import PrevPage from "../src/components/PrevPage";
import NextPage from "../src/components/NextPage";
import React, { useState, useEffect } from "react";
type dataType = {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  location: {
    name: string;
  };
  episode: string[];
};

const Main: React.FC = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData(page: number = 1) {
      let url = `https://rickandmortyapi.com/api/character/?page=${String(
        page
      )}`;

      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result.results);
      } catch (err) {
        console.log(err);
        setData([]);
      }
    }
    fetchData(pageNumber);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pageNumber]);

  const pageNumberPlusOne = (): void => {
    setPageNumber((prev) => prev + 1);
  };

  const pageNumberMinusOne = (): void => {
    setPageNumber((prev) => prev - 1);
  };

  const cards = data.map((Element: dataType) => (
    <Card
      name={Element.name}
      key={Element.id}
      image={Element.image}
      status={Element.status}
      species={Element.species}
      lastKnowLocation={Element.location.name}
      episode={Element.episode}
      id={Element.id}
    />
  ));

  if (!data) return <div>Loading...</div>;

  return (
    <div className="main">
      <div className="container">{cards}</div>
      {pageNumber !== 1 && <PrevPage onClick={pageNumberMinusOne} />}
      {pageNumber < 42 && <NextPage onClick={pageNumberPlusOne} />}
    </div>
  );
};
export default Main;
