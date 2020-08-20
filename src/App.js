// DOM
import React, { useState, useEffect } from "react"
import "./App.css"

// Database
import db from "./firebase"

// Screens
import Video from "./Screens/Video"

// App
function App() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    db.collection("videos").onSnapshot(snapshot =>
      setVideos(snapshot.docs.map(doc => doc.data()))
    )
  }, [])

  return (
    <div className="app">
      <div className="app_videos">
        {videos.map(
          ({ url, channel, description, song, likes, comments, shares }) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              comments={comments}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  )
}

// Export
export default App
