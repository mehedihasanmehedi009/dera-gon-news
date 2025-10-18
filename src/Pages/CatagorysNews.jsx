import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const CatagorysNews = () => {
    const [catagory,setCatagory]= useState([])
    const {id} = useParams()
    const data = useLoaderData()
    useEffect(()=>{
        if(id == "0"){
            setCatagory(data)
            return
        }
        else if(id =="1"){ 
            const filteredData = data.filter((news)=> news.others.is_today_pick==true)
            setCatagory(filteredData)
            return
          
        }
          else{
               const filteredData = data.filter((news)=> news.category_id==id)
               setCatagory(filteredData)
            }
    },[data,id])
    return (
        <div>
        this is home New{catagory.length}
        </div>
    );
};

export default CatagorysNews;