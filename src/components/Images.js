import React from "react";

const Images = ({ results }) => {
  let showImages;

  if (results) {
    showImages = results.map((result) => {
      const { id, urls } = result;

      return (
        <div key={id} className="flex break-inside-avoid pb-1 md:pb-4">
          <img src={urls?.regular} />
        </div>
      );
    });
  } else {
    showImages = "";
  }
  return <>{showImages}</>;
};

export default Images;
