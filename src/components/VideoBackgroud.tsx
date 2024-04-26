import React from 'react';

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted>
        <source src="/assets/background-video.mp4" type="video/mp4" />
      </video>

    </div>
  );
}

export default VideoBackground;