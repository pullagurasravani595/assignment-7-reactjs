import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'
import {formatDistanceToNow} from 'date-fns'
import Header from '../Header'
import SideContainer from '../SideContainer'
import ThemeSelector from '../../context/ThemeSelector'
import {
  VideoItemContainer,
  LoaderContainer,
  ItemContainer,
  PlayerContainer,
  Heading,
  ViewsTimeIconContainer,
  ViewersTimeContainer,
  ViewsIconContainer,
  HorizontalRule,
  LogoItemImage,
  ItemDetails,
  RightSideContainer,
} from './styledComponents'

class VideoCardItemDetails extends Component {
  state = {isLoading: true, videoItem: {}}

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getVideoItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const url = `https://apis.ccbp.in/videos/${id}`
    const response = await fetch(url, options)
    const itemData = await response.json()
    const updateData = {
      videoDetails: itemData.video_details,
    }
    const {videoDetails} = updateData
    const newUpdateData = {
      channel: videoDetails.channel,
      description: videoDetails.description,
      id: videoDetails.id,
      publishedAt: videoDetails.published_at,
      thumbnailUrl: videoDetails.thumbnail_url,
      title: videoDetails.title,
      videoUrl: videoDetails.video_url,
      viewCount: videoDetails.view_count,
    }

    this.setState({videoItem: newUpdateData, isLoading: false})
  }

  renderLoaderViewItem = () => (
    <LoaderContainer>
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderItemDetails = () => {
    const {videoItem} = this.state
    const {
      channel,
      description,
      publishedAt,
      title,
      videoUrl,
      viewCount,
    } = videoItem
    const timeNow = formatDistanceToNow(new Date(2021, 8, 20))
    return (
      <ItemContainer>
        <PlayerContainer>
          <ReactPlayer url={videoUrl} controls />
        </PlayerContainer>
        <Heading>{title}</Heading>
        <ViewsTimeIconContainer>
          <ViewersTimeContainer>
            <p>{viewCount}</p>
            <p>{timeNow}</p>
          </ViewersTimeContainer>
          <ViewersTimeContainer>
            <p>{viewCount}</p>
            <p>{timeNow}</p>
          </ViewersTimeContainer>
        </ViewsTimeIconContainer>
      </ItemContainer>
    )
  }

  render() {
    const {videoItem} = this.state
    console.log(videoItem)

    return (
      <ThemeSelector.Consumer>
        {value => {
          const {selectTheme} = value
          const {isLoading} = this.state
          console.log(selectTheme)
          return (
            <>
              <Header />
              <VideoItemContainer>
                <SideContainer />
                <RightSideContainer outline={selectTheme}>
                  {isLoading
                    ? this.renderLoaderViewItem()
                    : this.renderItemDetails()}
                </RightSideContainer>
              </VideoItemContainer>
            </>
          )
        }}
      </ThemeSelector.Consumer>
    )
  }
}

export default VideoCardItemDetails
