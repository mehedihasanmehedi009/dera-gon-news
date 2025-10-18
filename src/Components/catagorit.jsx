import React, { use } from 'react';
import { NavLink } from 'react-router';
const catagorispromise = fetch("/categories.json")
.then((res)=> res.json()) 
const Catagorit = () => {
     const catagoris = use(catagorispromise)
    return (
        <div>
            <h1 className='font-bold'>All Ctagores
            </h1>  
            <div className='grid  grid-col-1 mt-5'>
                {
                    catagoris.map(catagori=>
                        <NavLink  key={catagori.id}  
                        className={"btn bg-base-100 border-0 hover:bg-base-200  text-{20px} font-semibold"}
                        to={`/Catagory/${catagori.id}`}

                        >
                            {catagori.name}
                        </NavLink>
                    )
                }z
            </div>
        </div>
    );
};

export default Catagorit;