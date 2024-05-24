import React from 'react'
import { InstagramEmbed } from 'react-social-media-embed';



const Instafeed = () => {
  return (
    <div>
      <h1 className='text-4xl text-center'>Instafeedtest</h1>
      <br />
      <div className="flex flex-col justify-center items-center">
        <div className="max-w-full w-[500px] sm:w-[400px]">
          <InstagramEmbed url="https://www.instagram.com/p/C6D3hWAtMmp/" width={500} captioned />
        </div>
        <br />
        <br />
        <div className="max-w-full w-[500px] sm:w-[400px]">
          <InstagramEmbed url="https://www.instagram.com/reel/CqVNoEAvynp" width={500} />
        </div>
        {/* apparently you need to remove the '/' at the end of the url for it to work */}
      </div>
    </div>
  );
};

export default Instafeed