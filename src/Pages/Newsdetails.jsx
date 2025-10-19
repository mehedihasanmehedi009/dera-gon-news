import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import RigthAside from "../Components/homelayout/RigthAside";
import NewsDetailsCard from "../Components/homelayout/newsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const Newsdetails = () => {
    const [news,setNews] = useState({})
    const data = useLoaderData()
    const {id} = useParams()
    useEffect(()=>{
        const setdata = data.find((n)=>n.id==id)
       setNews(setdata)
    },[data, id ])
  return (
    <div>
      <header className="py-3">
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5 p -5">
        <section className="col-span-9">
          <NewsDetailsCard news={news}>
            
          </NewsDetailsCard>
        </section>
        <aside className="col-span-3">
          <RigthAside></RigthAside>
        </aside>
      </main>
    </div>
  );
};

export default Newsdetails;
