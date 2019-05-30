import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

//here name of the prop 'img' can be anything
//but it should be same in  ImageCard component
const ImageList = props => {
  const images = props.images.map(image => {
    return <ImageCard key={image.id} img={image} />;
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;
