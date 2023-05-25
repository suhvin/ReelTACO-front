import { useEffect, useRef } from "react";

const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video && video.play) {
      video.play();
    }

    return () => {
      if (video && video.pause) {
        video.pause();
      }
    };
  }, []);

  return (
    <video ref={videoRef} controls>
      <source src="/asset/common/video2.mp4" type="video/quicktime" />
    </video>
  );
};

export default VideoPlayer;
