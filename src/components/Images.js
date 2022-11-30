import React from "react";

const Images = ({ results }) => {
  let showImages;

  if (results) {
    showImages = results.map((result) => {
      const { id, urls } = result;

      return (
        <div key={id} className="flex">
          <img src={urls?.regular} className="h-full w-full" />
        </div>
      );
    });
  } else {
    showImages = "";
  }
  return <>{showImages}</>;
};

export default Images;
