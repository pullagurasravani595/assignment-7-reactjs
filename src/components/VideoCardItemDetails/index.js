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
  TitleDescription,
  LoaderContainer,
  ItemContainer,
  ViewsTimeIconContainer,
  DescriptionViewsContainer,
  ViewsIconContainer,
  IconElement,
  HorizontalRule,
  ChannelName,
  LogoItemImage,
  SubscriberCount,
  DescriptionVideo,
  ItemDetails,
  RightSideContainer,
  ButtonElement,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  FailureBtn,
  NewContainer,
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
    if (response.ok === true) {
      const updateData = {
        videoDetails: itemData.video_details,
      }
      const {videoDetails} = updateData
      const newUpdateData = {
        id: videoDetails.id,
        channel: videoDetails.channel,
        description: videoDetails.description,
        publishedAt: videoDetails.published_at,
        thumbnailUrl: videoDetails.thumbnail_url,
        title: videoDetails.title,
        videoUrl: videoDetails.video_url,
        viewCount: videoDetails.view_count,
      }
      this.setState({
        apiStatus: apiStatusConditions.success,
        videoItem: newUpdateData,
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

  ItemDetailsBtn = () => {
    this.getVideoItemDetails()
  }

  renderFailureItemView = selectTheme => (
    <>
      <FailureContainer>
        <FailureImage
          src={
            selectTheme
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          }
          alt="failure view"
        />
        <FailureHeading outline={selectTheme}>
          Oops! Something Went Wrong
        </FailureHeading>
        <FailureDescription outline={selectTheme}>
          We are having some trouble to complete your request. Please try again.
        </FailureDescription>
        <FailureBtn type="button" onClick={this.ItemDetailsBtn}>
          Retry
        </FailureBtn>
      </FailureContainer>
    </>
  )

  renderSuccessDetails = (
    selectTheme,
    saveVideosList,
    savedListDetails,
    removedItemToList,
  ) => {
    const {videoItem, likeBtn, dislikeBtn} = this.state
    const {
      videoUrl,
      title,
      viewCount,
      publishedAt,
      channel,
      description,
      id,
    } = videoItem

    const isActiveList = saveVideosList.filter(eachFound => eachFound.id === id)
    const isFound = isActiveList.length === 0 ? 'save' : 'saved'
    console.log(isActiveList)

    const onClickSaveText = () => {
      savedListDetails(videoItem)
    }

    const onClickSavedBtn = () => {
      removedItemToList(id)
    }

    return (
      <>
        <ItemContainer>
          <ReactPlayer url={videoUrl} width="100%" />
          <TitleDescription outline={selectTheme}>{title}</TitleDescription>
          <ViewsTimeIconContainer>
            <ViewsIconContainer>
              <DescriptionViewsContainer outline={selectTheme}>
                {viewCount} views
              </DescriptionViewsContainer>
              <DescriptionViewsContainer outline={selectTheme}>
                .
              </DescriptionViewsContainer>
              <DescriptionViewsContainer outline={selectTheme}>
                {formatDistanceToNow(new Date(publishedAt))}
              </DescriptionViewsContainer>
            </ViewsIconContainer>
            <ViewsIconContainer>
              <ViewsIconContainer>
                <NewContainer onClick={this.onClickLikeIcon}>
                  <IconElement outline={likeBtn}>
                    <AiOutlineLike />
                  </IconElement>
                  <ButtonElement outline={likeBtn}>Like</ButtonElement>
                </NewContainer>
              </ViewsIconContainer>
              <ViewsIconContainer>
                <NewContainer onClick={this.onClickDislikeIcon}>
                  <IconElement outline={dislikeBtn}>
                    <AiOutlineDislike />
                  </IconElement>
                  <ButtonElement outline={dislikeBtn}>Dislike</ButtonElement>
                </NewContainer>
              </ViewsIconContainer>
              <ViewsIconContainer>
                <IconElement>
                  <MdPlaylistAdd />
                </IconElement>
                {isFound === 'saved' ? (
                  <ButtonElement type="button" onClick={onClickSavedBtn}>
                    Saved
                  </ButtonElement>
                ) : (
                  <ButtonElement onClick={onClickSaveText} type="button">
                    Save
                  </ButtonElement>
                )}
              </ViewsIconContainer>
            </ViewsIconContainer>
          </ViewsTimeIconContainer>
          <HorizontalRule />
          <NewContainer>
            <ViewsIconContainer>
              <LogoItemImage
                src={channel.profile_image_url}
                alt="channel logo"
              />
              <ItemDetails>
                <ChannelName outline={selectTheme}>{channel.name}</ChannelName>
                <SubscriberCount outline={selectTheme}>
                  {channel.subscriber_count} subscribers
                </SubscriberCount>
                <DescriptionVideo outline={selectTheme}>
                  {description}
                </DescriptionVideo>
              </ItemDetails>
            </ViewsIconContainer>
          </NewContainer>
        </ItemContainer>
      </>
    )
  }

  renderSearchResults = (
    selectTheme,
    saveVideosList,
    savedListDetails,
    removedItemToList,
  ) => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConditions.success:
        return this.renderSuccessDetails(
          selectTheme,
          saveVideosList,
          savedListDetails,
          removedItemToList,
        )
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
          const {
            selectTheme,
            savedListDetails,
            removedItemToList,
            saveVideosList,
          } = value
          return (
            <>
              <Header />
              <VideoItemContainer>
                <SideContainer />
                <RightSideContainer
                  outline={selectTheme}
                  data-testid="videoItemDetails"
                >
                  {this.renderSearchResults(
                    selectTheme,
                    saveVideosList,
                    savedListDetails,
                    removedItemToList,
                  )}
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
