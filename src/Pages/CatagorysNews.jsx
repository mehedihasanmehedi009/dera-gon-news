import React from 'react';
import { useParams } from 'react-router';

const CatagorysNews = () => {
    const obj = useParams()
    console.log(obj)
    return (
        <div>
        this is home New
        </div>
    );
};

export default CatagorysNews;