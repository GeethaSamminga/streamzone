import { useParams } from 'react-router-dom'
import Recommended from '../../components/Recommended/recommended'
import PlayVideo from '../../components/playvideo/playVideo'
import './video.css'
const Video=()=>{

    const {videoId,categoryId}= useParams();

    return(
        <div className='play-container'>
            <PlayVideo videoId={videoId}/>
            <Recommended categoryId={categoryId}/>
        </div>
    )
}
export default Video