import { useState, useEffect } from "react";
import axios from "axios";

import Search from "./components/Search";
import Images from "./components/Images";

function App() {
  const [fetchedData, setFetchedData] = useState([]);
  const [search, setSearch] = useState("tree");
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
    getRandomImage();
    getData();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="flex relative mt-[10%] md:mt-[5%]">
        {/* <img src={randomImage?.urls?.regular} className="relative -z-10" /> */}

        <img
          src="https://images.unsplash.com/photo-1669250494317-4251870813e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzODUzMDN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Njk4MDQ5MDI&ixlib=rb-4.0.3&q=80&w=1080"
          className="relative "
        />

        <div className="absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-25 items-center justify-center flex flex-col">
          <p className="text-white text-center font-semibold text-4xl md:text-6xl">
            image search gallery
          </p>
          <span className="text-sm text-white pb-10">
            thanks to Unsplash API
          </span>
          <Search setSearch={setSearch} />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 px-[1%] xl:px-[5%] 2xl:px-[20%] gap-1 md:gap-4 pt-20">
        <Images results={results} />
      </div>
    </div>
  );
}

export default App;
