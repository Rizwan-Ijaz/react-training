import React from 'react';
import Photo from '../assets/junaid.png';
import CvIntro from './CvIntro';
import ProfilePhoto from './ProfilePhoto';

function Header() {
  return (
    <div className="cvheader">
      <div className='cvimage'>
        <ProfilePhoto /></div>
      <CvIntro /> 
    </div>




  )
}

export default Header;
