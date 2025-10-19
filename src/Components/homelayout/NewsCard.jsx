import React from "react";
import { FaEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";
import { FaShareAlt } from "react-icons/fa";
import { Link } from "react-router";
 

const NewsCard = ({ New }) => {
  const { id,title, author, thumbnail_url, details, rating, total_view, tags } =
    New;

  return (
    <div className="card bg-base-100 shadow-md rounded-lg overflow-hidden border border-base-300">
      {/* Author Info */}
      <div className="flex items-center justify-between p-4 border-b border-base-200">
        <div className="flex items-center space-x-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold">{author?.name}</h2>
            <p className="text-sm text-gray-500">
              {new Date(author?.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <button className=" flex gap-2 ">
          <CiBookmark/>
          <FaShareAlt/>
        </button>
      </div>
      <div className="p-4">
        <h2 className="card-title text-lg font-bold mb-2">{title}</h2>
      </div>
      {/* Image */}
      <figure>
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full object-cover h-56"
        />
      </figure>

      {/* Title & Details */}
      <div className="p-4">
        <p className="text-gray-700 text-sm mb-4">
          {details.length > 180 ? details.slice(0, 180) + "..." : details}
        </p>
        <Link to={`/news-details/${id}`} className="text-primary font-semibold hover:underline">
          Read More
        </Link>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 py-3 border-t border-base-200 bg-base-100 text-sm">
        {/* Rating */}
        <div className="flex items-center gap-1 text-warning">
          {Array.from({ length: 5 }, (_, i) => (
            <FaStar
              key={i}
              className={
                i < rating?.number ? "text-yellow-400" : "text-gray-300"
              }
            />
          ))}
          <span className="ml-2 text-gray-600 font-medium">
            {rating?.number}
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center text-gray-600">
          <FaEye className="mr-1" />
          {total_view}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
