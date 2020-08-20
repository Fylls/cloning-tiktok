// DOMs
import React, { useRef, useState } from "react"
import "./Video.css"

// Components
import VideoFooter from "../Components/VideoFooter"

const videos = [
  "https://v16m.tiktokcdn.com/dbba2163be77b79c78542717eb24e8a0/5f41500d/video/tos/useast2a/tos-useast2a-pve-0068/a09aace3c9b046e3b96e872afee11d64/?a=1233&br=1818&bt=909&cr=0&cs=0&dr=0&ds=3&er=&l=202008201704130101890741590C251657&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=ajlwNGdzZDdsdDMzNjczM0ApaGU5N2U5OGVkNzQ3ODdlOmdfZTNkYi5zbmNfLS0yMTZzc18vYTMtYDUtNmFgYi40XzI6Yw%3D%3D&vl=&vr=",
  "https://v16m.tiktokcdn.com/aeeb720c5cf6b75074eb91c02ae6dec7/5f41507f/video/tos/useast2a/tos-useast2a-ve-0068c004/1f22e09c6fca4165acac422fbcb62b97/?a=1233&br=3070&bt=1535&cr=0&cs=0&dr=0&ds=3&er=&l=202008201706070101891960705B24F199&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=Mzs6ZnN2aWh0djMzaDczM0ApZGdnZGc1NGQ1NzVkZWc7OGdea2guMjVrYzFfLS0tMTZzc2NgLjQxMi5iLmIxMzMxX2M6Yw%3D%3D&vl=&vr=",
  "https://v16m.tiktokcdn.com/07290c76bf6aaeea46af95421b84bef2/5f4150a6/video/tos/useast2a/tos-useast2a-pve-0068/d65f0fedaabf45b88118cd72bff5c1ad/?a=1233&br=2106&bt=1053&cr=0&cs=0&dr=0&ds=3&er=&l=202008201706460101902090951A2595C7&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=ajpybm5xbjVqdjMzOjczM0ApNDppNjhlOzxlN2c6NjpoZmcxLzFiYGJrMF5fLS01MTZzc14tMzMyMjItNjM0XjQyYS86Yw%3D%3D&vl=&vr=",
  "https://v16m.tiktokcdn.com/12d99b5d57756cd3a0dd600b1a334c3d/5f4150fd/video/tos/useast2a/tos-useast2a-pve-0068/a7a9f8ebefa24a3e99293240975f7906/?a=1233&br=2316&bt=1158&cr=0&cs=0&dr=0&ds=3&er=&l=202008201708130101890720344E25087A&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=MzxoOm93PDZzdjMzaDczM0ApMzM0ZjdpaDw2N2YzZGQ7OmctZW1rLS1tYTBfLS0xMTZzcy1iMF8zNjAwNS81NDQ0NjU6Yw%3D%3D&vl=&vr=",
  "https://v16m.tiktokcdn.com/843c123d62455134ab3845cf69225a24/5f4150ff/video/tos/useast2a/tos-useast2a-pve-0068/c2f3d2372ae4439d9e72458123701913/?a=1233&br=2842&bt=1421&cr=0&cs=0&dr=0&ds=3&er=&l=2020082017081501018806120314252FB1&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=ajh5dWlwdjd4djMzNDczM0ApNWU0NmQ5NWUzN2k0Ozg0aGdhX3BfZS0za2RfLS00MTZzcy4wYl9iXmE2XzJhXi42Xy46Yw%3D%3D&vl=&vr=",
]

// Screen
function Video() {
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
        src="https://v16m.tiktokcdn.com/dbba2163be77b79c78542717eb24e8a0/5f41500d/video/tos/useast2a/tos-useast2a-pve-0068/a09aace3c9b046e3b96e872afee11d64/?a=1233&br=1818&bt=909&cr=0&cs=0&dr=0&ds=3&er=&l=202008201704130101890741590C251657&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=ajlwNGdzZDdsdDMzNjczM0ApaGU5N2U5OGVkNzQ3ODdlOmdfZTNkYi5zbmNfLS0yMTZzc18vYTMtYDUtNmFgYi40XzI6Yw%3D%3D&vl=&vr="
      ></video>
      <VideoFooter
        channel="Fylls"
        description="Loooooooooooooooool"
        song="funny song"
      />
    </div>
  )
}

// Export
export default Video
