import React from 'react'
import { FacebookEmbed } from 'react-social-media-embed';


const Mediatest = () => {
  const iframeStyle = {
    border: 'none',
    overflow: 'hidden',
  };

  return (
    <div >
      <h1 className='text-4xl text-center'>Media Test</h1>
      <br />
      <div className="flex justify-center">
      <div className="flex justify-center bg-white p-4 rounded-lg max-w-[520px] ">
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2FTitansFT%2Fposts%2Fpfbid0jpgxP7PFQS1ZTHsDm2VPRrZ77Gq3zc7uPP9zVKSRL5ef1tJLmPiHndc7MPMMNTdvl&show_text=true&width=500&is_preview=true"
          width="500"
          height="589"
          style={iframeStyle}
          scrolling="no"
          frameBorder="0"
          allowFullScreen
        />
      </div>
      <div className="flex justify-center bg-white p-4 rounded-lg max-w-[520px] ">
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <FacebookEmbed url="https://www.facebook.com/TitansFT/posts/pfbid02oCB918jsS5tvKZ2Xb1CAF9WCg5BTRtZvpC9Fbv6vt8gsDcuEsw6qv326RacyJj9jl" width={500} />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Mediatest