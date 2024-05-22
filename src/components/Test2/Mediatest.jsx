import React from 'react'

const Mediatest = () => {
  const iframeStyle = {
    border: 'none',
    overflow: 'hidden',
  };

  return (
    <div>
      <h1 className='text-4xl text-center'>Media Test</h1>
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
  )
}

export default Mediatest