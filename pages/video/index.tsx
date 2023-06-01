import { useEffect, useRef } from "react";

const VideoPlayer = () => {
  // const videoRef = useRef<HTMLVideoElement | null>(null);

  // useEffect(() => {
  //   const video = videoRef.current;
  //   if (video && video.play) {
  //     video.play();
  //   }

  //   return () => {
  //     if (video && video.pause) {
  //       video.pause();
  //     }
  //   };
  // }, []);

  return (
    <video controls>
      <source src="/asset/common/video3.mp4" type="video/mp4" />
    </video>
  );
};

export default VideoPlayer;
