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
  Description,
  ViewsTimeIconContainer,
  ViewersTimeContainer,
  ViewsIconContainer,
  HorizontalRule,
  LogoItemImage,
  ItemDetails,
  RightSideContainer,
  NewContainer,
  ButtonElement,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  FailureBtn,
} from './styledComponents'

const apiStatusConditions = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
  initial: 'INITIAL',
}

class VideoCardItemDetails extends Component {
  state = {
    videoItem: {},
    likeBtn: false,
    dislikeBtn: false,
    saveBtn: false,
    apiStatus: apiStatusConditions.initial,
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getVideoItemDetails = async () => {
    this.setState({apiStatus: apiStatusConditions.inProgress})
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

    if (response.ok === true) {
      this.setState({
        videoItem: newUpdateData,
        apiStatus: apiStatusConditions.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConditions.failure})
    }
  }

  renderLoaderViewItem = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  onClickLikeIcon = () => {
    this.setState(prevState => ({likeBtn: !prevState.likeBtn}))
    this.setState({dislikeBtn: false})
  }

  onClickDislikeIcon = () => {
    this.setState(prevState => ({dislikeBtn: !prevState.dislikeBtn}))
    this.setState({likeBtn: false})
  }

  renderItemDetails = (selectTheme, savedListDetails) => {
    const {videoItem, likeBtn, dislikeBtn, saveBtn} = this.state
    const {
      channel,
      description,
      publishedAt,
      title,
      videoUrl,
      viewCount,
    } = videoItem
    const timeNow = formatDistanceToNow(new Date(publishedAt))
    const onClickSave = () => {
      this.setState(prevState => ({saveBtn: !prevState.saveBtn}))
      savedListDetails(videoItem)
    }
    const saveText = saveBtn ? 'Saved' : 'Save'
    return (
      <ItemContainer>
        <ReactPlayer url={videoUrl} width="100%" />
        <Description outline={selectTheme}>{title}</Description>
        <ViewsTimeIconContainer>
          <ViewersTimeContainer>
            <Description>{viewCount} . </Description>
            <Description>{timeNow}</Description>
          </ViewersTimeContainer>
          <ViewersTimeContainer>
            <ViewsIconContainer>
              <ButtonElement outline={likeBtn} onClick={this.onClickLikeIcon}>
                <AiOutlineLike />
              </ButtonElement>
              <ButtonElement outline={likeBtn}>Like</ButtonElement>
            </ViewsIconContainer>
            <ViewsIconContainer>
              <ButtonElement
                outline={dislikeBtn}
                onClick={this.onClickDislikeIcon}
              >
                <AiOutlineDislike />
              </ButtonElement>
              <ButtonElement outline={dislikeBtn}>Dislike</ButtonElement>
            </ViewsIconContainer>
            <ViewsIconContainer>
              <ButtonElement onClick={onClickSave} outline={saveBtn}>
                <MdPlaylistAdd />
              </ButtonElement>
              <ButtonElement outline={saveBtn} type="button">
                {saveText}
              </ButtonElement>
            </ViewsIconContainer>
          </ViewersTimeContainer>
        </ViewsTimeIconContainer>
        <HorizontalRule />
        <NewContainer>
          <LogoItemImage src={channel.profile_image_url} alt="channel logo" />
          <ItemDetails>
            <Description outline={selectTheme}>{channel.name}</Description>
            <Description>{channel.subscriber_count} subscribers</Description>
            <Description>{description}</Description>
          </ItemDetails>
        </NewContainer>
      </ItemContainer>
    )
  }

  onClickRetryBtn = () => {
    this.getVideoItemDetails()
  }

  renderFailureItemView = selectTheme => {
    const imageUrlFailure = selectTheme
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
    return (
      <FailureContainer>
        <FailureImage src={imageUrlFailure} alt="failure view" />
        <FailureHeading outline={selectTheme}>
          Oops! Something Went Wrong
        </FailureHeading>
        <FailureDescription outline={selectTheme}>
          We are having some trouble to complete your request. Please try again.
        </FailureDescription>
        <FailureBtn onClick={this.onClickRetryBtn}>Retry</FailureBtn>
      </FailureContainer>
    )
  }

  renderSearchResults = (selectTheme, savedListDetails) => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConditions.success:
        return this.renderItemDetails(selectTheme, savedListDetails)
      case apiStatusConditions.failure:
        return this.renderFailureItemView(selectTheme)
      case apiStatusConditions.inProgress:
        return this.renderLoaderViewItem()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeSelector.Consumer>
        {value => {
          const {selectTheme, savedListDetails} = value
          console.log(selectTheme)
          return (
            <>
              <Header />
              <VideoItemContainer>
                <SideContainer />
                <RightSideContainer outline={selectTheme}>
                  {this.renderSearchResults(selectTheme, savedListDetails)}
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
