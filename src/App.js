import { useState, useEffect } from "react";
import axios from "axios";

import Search from "./components/Search";
import Images from "./components/Images";

function App() {
  const [fetchedData, setFetchedData] = useState([]);
  const [search, setSearch] = useState("");
  const [randomImage, setRandomImage] = useState("");
  const { results } = fetchedData;

  const apiEndPoint = `https://api.unsplash.com/search/photos?query=${search}&client_id=${process.env.REACT_APP_ACCESS_KEY}&per_page=9`;
  const randomImageEndPoint = `https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_ACCESS_KEY}&orientation=landscape`;

  const getRandomImage = async () => {
    const randomImageResponse = await axios.get(randomImageEndPoint);
    setRandomImage(randomImageResponse.data);
    console.log(randomImage);
  };

  const getData = async () => {
    const response = await axios.get(apiEndPoint);
    setFetchedData(response.data);
  };

  useEffect(() => {
    getData();
  }, [apiEndPoint]);

  useEffect(() => {
    getRandomImage();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="flex relative mt-[10%] md:mt-[5%]">
        <img src={randomImage?.urls?.regular} className="relative" />

        <div className="absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-30 items-center justify-center flex flex-col">
          <p className="text-white text-center font-semibold text-4xl md:text-6xl">
            image search gallery
          </p>
          <span className="text-sm text-white pb-10">
            thanks to Unsplash API
          </span>
          <Search setSearch={setSearch} />
        </div>
      </div>

      <div className="md:columns-2 lg:columns-3 px-1 md:px-4 gap-1 max-w-[1300px] md:gap-4 pt-20">
        <Images results={results} />
      </div>
    </div>
  );
}

export default App;
