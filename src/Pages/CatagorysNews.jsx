import React, { useEffect } from "react";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Components/homelayout/NewsCard";

const CatagorysNews = () => {
  const [catagory, setCatagory] = useState([]);
  const { id } = useParams();
  const data = useLoaderData();
  useEffect(() => {
    if (id == "0") {
      setCatagory(data);
      return;
    } else if (id == "1") {
      const filteredData = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCatagory(filteredData);
      return;
    } else {
      const filteredData = data.filter((news) => news.category_id == id);
      setCatagory(filteredData);
    }
  }, [data, id]);
  return (
    <div>
      <h1 className=" font-bold">
        This is New : <span className="text-secondary">{catagory.length}</span>
      </h1>
      <div className="grid grid-cols-1 gap-5 ">
        {catagory.map((New) => (
          <NewsCard key={New.id} New={New}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CatagorysNews;
