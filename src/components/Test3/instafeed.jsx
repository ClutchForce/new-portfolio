import React from 'react';
import { InstagramEmbed } from 'react-social-media-embed';


const Instafeed = () => {
  return (
    <div className="">
      <h1 className="text-4xl text-center">Paul Prints Plastic</h1>
      <br />
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 lg:w-1/3 lg:p-4 sm:p-0">
          <div className="max-w-full">
            <InstagramEmbed url="https://www.instagram.com/p/C6wiCdtrc57"  />
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 lg:p-4 sm:p-0">
          <div className="max-w-full">
            <InstagramEmbed url="https://www.instagram.com/p/C6wXePKsZYL"  />
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 lg:p-4 sm:p-0">
          <div className="max-w-full">
            <InstagramEmbed url="https://www.instagram.com/p/C6wcIRwLhNt"  />
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 lg:p-4 sm:p-0">
          <div className="max-w-full">
            <InstagramEmbed url="https://www.instagram.com/p/C6wcdN9r7gr"  />
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 lg:p-4 sm:p-0">
          <div className="max-w-full">
            <InstagramEmbed url="https://www.instagram.com/p/C6wgxPYLcAw"  />
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 lg:p-4 sm:p-0">
          <div className="max-w-full">
            <InstagramEmbed url="https://www.instagram.com/p/C6whgBsLiOT"  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instafeed;