// DOM
import React from "react"
import "./App.css"

// Screens
import Video from "./Screens/Video"

// App
function App() {
  return (
    <div className="app">
      <div className="app_videos">
        <Video />
        <Video />
      </div>
    </div>
  )
}

// Export
export default App
