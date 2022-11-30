import React from "react";

const Search = ({ setSearch }) => {
  return (
    <div>
      <form>
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search for images"
          type="text"
          className="px-4 py-2 rounded-xl text-center border-2 md:w-80 border-gray-300"
        />
      </form>
    </div>
  );
};

export default Search;
