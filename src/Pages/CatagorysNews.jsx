import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const CatagorysNews = () => {
    const {id} = useParams()
    const data = useLoaderData()
    console.log(id,data)
    return (
        <div>
        this is home New
        </div>
    );
};

export default CatagorysNews;