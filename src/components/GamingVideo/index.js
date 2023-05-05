import {Link} from 'react-router-dom'
import ThemeSelector from '../../context/ThemeSelector'
import {
  ListContainer,
  GamingVideoImage,
  HeadingElement,
  GamingDescriptionValue,
} from './styledComponents'

const GamingVideo = props => (
  <ThemeSelector.Consumer>
    {value => {
      const {selectTheme} = value
      const {gamingDetails} = props
      const {id, thumbnailUrl, title, viewCount} = gamingDetails
      return (
        <Link to={`/videos/${id}`}>
          <ListContainer>
            <GamingVideoImage src={thumbnailUrl} alt="video thumbnail" />
            <HeadingElement outline={selectTheme}>{title}</HeadingElement>
            <GamingDescriptionValue outline={selectTheme}>
              {viewCount} Watching WorldWide
            </GamingDescriptionValue>
          </ListContainer>
        </Link>
      )
    }}
  </ThemeSelector.Consumer>
)

export default GamingVideo
