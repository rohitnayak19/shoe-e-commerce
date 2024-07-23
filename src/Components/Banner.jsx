import React from 'react';
import bannerImage from '../assets/banner2.png';
const Banner = () => {
  const bannerStyle = {
    height: '56px',
    width: '100%',
    backgroundImage: `url(${bannerImage})`,
    backgroundSize: '300px',
    backgroundPosition: 'center',
    display: 'grid',
    placeItems: 'center',
    backgroundColor: '#273746',
  };

  return (
    <div style={bannerStyle}>
      <h1 className='text-white text-xl'>
        🎃 Discover your perfect pair at SoleHeaven with up to 50% 💖
      </h1>
    </div>
  );
};

export default Banner;
