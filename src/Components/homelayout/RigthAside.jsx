import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';
import QZone from './Q-Zone';


const RigthAside = () => {
    return (
        <div className=' space-y-8'>
      <SocialLogin></SocialLogin>
       <FindUs></FindUs>
       <QZone></QZone>
        </div>
    );
};

export default RigthAside;