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
        <ListContainer>
          <GamingVideoImage src={thumbnailUrl} alt="thumbnailUrl" />
          <HeadingElement outline={selectTheme}>{title}</HeadingElement>
          <GamingDescriptionValue outline={selectTheme}>
            {viewCount} Watching WorldWide
          </GamingDescriptionValue>
        </ListContainer>
      )
    }}
  </ThemeSelector.Consumer>
)

export default GamingVideo
