import ReactPlayer from 'react-player'

function VideoPlayer({url}) {
  return (
    <ReactPlayer url={url}/>
  )
}

export default VideoPlayer