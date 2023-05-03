import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import ThemeSelector from '../../context/ThemeSelector'
import {
  ListContainer,
  ThumbnailImage,
  DetailsContainer,
  Heading,
  DescriptionElement,
  ViewsTimeContainer,
} from './styledComponents'

const TrendingVideoCard = props => (
  <ThemeSelector.Consumer>
    {value => {
      const {selectTheme} = value
      const {cardDetails} = props
      const {
        thumbnailUrl,
        title,
        channel,
        viewCount,
        publishedAt,
        id,
      } = cardDetails
      const Duration = formatDistanceToNow(new Date(publishedAt))
      return (
        <Link to={`/videos/${id}`}>
          <ListContainer data-testid="trending">
            <ThumbnailImage src={thumbnailUrl} alt="thumbnail image" />
            <DetailsContainer>
              <Heading outline={selectTheme}>{title}</Heading>
              <DescriptionElement>{channel.name}</DescriptionElement>
              <ViewsTimeContainer>
                <DescriptionElement>{viewCount}</DescriptionElement>
                <DescriptionElement>. {Duration}</DescriptionElement>
              </ViewsTimeContainer>
            </DetailsContainer>
          </ListContainer>
        </Link>
      )
    }}
  </ThemeSelector.Consumer>
)

export default TrendingVideoCard
