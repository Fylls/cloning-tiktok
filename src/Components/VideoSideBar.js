// DOMs
import React, { useState } from "react"
import "./VideoSideBar.css"

// Icons
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import FavoriteIcon from "@material-ui/icons/Favorite"
import ShareIcon from "@material-ui/icons/Share"
import ChatIcon from "@material-ui/icons/Chat"

// Component
function VideoSideBar({ likes, comments, shares }) {
  const [liked, setLiked] = useState(false)

  return (
    <div className="video_sidebar">
      <div className="video_sidebar_button">
        {liked ? (
          <FavoriteIcon fontSize="large" onClick={e => setLiked(false)} />
        ) : (
          <FavoriteBorderIcon fontSize="large" onClick={e => setLiked(true)} />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>

      <div className="video_sidebar_button">
        <ChatIcon fontSize="large" />
        <p>{comments}</p>
      </div>

      <div className="video_sidebar_button">
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  )
}

// Export
export default VideoSideBar
