// DOMs
import React, { useRef, useState } from "react"
import "./Video.css"

// Components
import VideoFooter from "../Components/VideoFooter"
import VideoSideBar from "../Components/VideoSideBar"

// Screen
function Video({ url, channel, description, song, likes, comments, shares }) {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef(null)

  const onVideoClick = () => {
    return playing
      ? (videoRef.current.pause(), setPlaying(false))
      : (videoRef.current.play(), setPlaying(true))
  }

  return (
    <div className="video">
      <video
        className="video_player"
        loop
        onClick={onVideoClick}
        ref={videoRef}
        src={url}
      ></video>

      <VideoSideBar likes={likes} comments={comments} shares={shares} />

      <VideoFooter channel={channel} description={description} song={song} />
    </div>
  )
}

// Export
export default Video
