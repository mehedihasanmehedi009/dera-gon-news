import React from "react";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  const { image_url, title, details } = news;
  return (
    <>
      <h1 className="text-2xl font-bold">Dragon News</h1>
      <div className="mt-3 space-y-5 ">
        <img className="w-full h-[550px]" src={image_url} alt="" />
        <h1 className="text-3xl font-bold p-4"> {title}</h1>
        <h3>{details}</h3>
      </div>
      <Link
        className="btn btn-secondary mt-3"
        to={`/Catagory/${news.category_id}`}
      >
        {" "}
        All news in this category
      </Link>
    </>
  );
};

export default NewsDetailsCard;
