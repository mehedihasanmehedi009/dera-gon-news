import React from 'react';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>
                login With 
            </h2>
        <div className=' space-y-3'>
            <button className='btn w-full  btn-secondary  btn-outline '>Login With Google</button>
            <button className='btn w-full  btn-outline '>Login With Github</button>
        </div>

            
        </div>
    );
};

export default SocialLogin;