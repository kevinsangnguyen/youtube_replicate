import React from 'react';

const VideoDetail = ({video}) => {
  if (!video){
    return <div>Loading...</div>
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  const youtubeurl = `https://youtu.be/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>
          <p>{video.snippet.description}</p>
          <p><a target="_blank" href={youtubeurl}>Click for more</a></p>
        </div>
      </div>
    </div>
  )

};

export default VideoDetail;
