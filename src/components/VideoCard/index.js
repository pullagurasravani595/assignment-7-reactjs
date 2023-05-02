import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import ThemeSelector from '../../context/ThemeSelector'
import './index.css'

const VideoCard = props => {
  const {videoDetails} = props
  const {
    channel,
    thumbnailUrl,
    title,
    viewCount,
    publishedAt,
    id,
  } = videoDetails

  const duration = formatDistanceToNow(new Date(publishedAt))
  const renderVideoCard = () => (
    <ThemeSelector.Consumer>
      {value => {
        const {selectTheme} = value
        const videoHeading = selectTheme
          ? 'video-heading'
          : 'video-heading video-heading-black'
        return (
          <div className="title-count-duration-container">
            <p className={videoHeading}>{title}</p>
            <p className="video-description">{channel.name}</p>
            <div className="view-count-duration-container">
              <p className="video-description">{viewCount}</p>
              <p className="video-description">. {duration}</p>
            </div>
          </div>
        )
      }}
    </ThemeSelector.Consumer>
  )

  return (
    <Link to={`/videos/${id}`} className="nav-link">
      <li className="video-list-container">
        <img
          src={thumbnailUrl}
          alt="video thumbnail"
          className="video-card-thumbnail"
        />
        <div className="video-banner-container">
          <img
            src={channel.profile_image_url}
            alt="channel logo"
            className="video-card-profile-img"
          />
          {renderVideoCard()}
        </div>
      </li>
    </Link>
  )
}

export default VideoCard
