import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import Header from '../Header'
import SideContainer from '../SideContainer'
import VideoCard from '../VideoCard'
import ThemeSelector from '../../context/ThemeSelector'
import {
  BannerContainerHome,
  RightSideHomeContainer,
  MainBannerContainer,
  BannerBgContainer,
  BannerBgImg,
  BgContainerDescription,
  BgBtn,
  CloseBtn,
  HomeVideoContainer,
  InputContainer,
  InputElement,
  SearchElement,
  LoaderContainer,
  UnOrderListContainerHome,
  FailureContainerHome,
  FailureImgElement,
  FailureHomeHeading,
  DescriptionFailureHome,
  HomeFailureBtn,
} from './styledComponents'

const apiStatusConstraints = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
  initial: 'INITIAL',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstraints.initial,
    searchInput: '',
    videosList: [],
    displayPage: true,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstraints.inProgress})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const formattedData = data.videos.map(eachVideo => ({
        channel: eachVideo.channel,
        id: eachVideo.id,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
      }))

      this.setState({
        apiStatus: apiStatusConstraints.success,
        videosList: formattedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstraints.failure})
    }
  }

  renderAfterSearchInputDetails = async () => {
    this.setState({apiStatus: apiStatusConstraints.inProgress})
    const {searchInput} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const responseData = await fetch(url, options)
    if (responseData.ok === true) {
      const newResponseUpdateData = await responseData.json()
      const newFormattedData = newResponseUpdateData.videos.map(eachItem => ({
        channel: eachItem.channel,
        id: eachItem.id,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        videosList: newFormattedData,
        apiStatus: apiStatusConstraints.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstraints.failure})
    }
  }

  renderSuccessView = () => {
    const {videosList} = this.state
    return (
      <UnOrderListContainerHome className="un-order-list-container">
        {videosList.map(video => (
          <VideoCard videoDetails={video} key={video.id} />
        ))}
      </UnOrderListContainerHome>
    )
  }

  renderLoadingView = () => (
    <LoaderContainer className="home-loader" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  onClickHomeRetryBtn = () => {
    this.getVideos()
  }

  renderFailureView = selectTheme => (
    <FailureContainerHome>
      <FailureImgElement
        src={
          selectTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        }
        alt="failure view"
      />
      <FailureHomeHeading outline={selectTheme}>
        Oops! Something Went Wrong
      </FailureHomeHeading>
      <DescriptionFailureHome>
        We are having some trouble to complete your request.Please try again.
      </DescriptionFailureHome>
      <HomeFailureBtn type="button" onClick={this.onClickHomeRetryBtn}>
        Retry
      </HomeFailureBtn>
    </FailureContainerHome>
  )

  renderVideoList = selectTheme => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstraints.success:
        return this.renderSuccessView()
      case apiStatusConstraints.failure:
        return this.renderFailureView(selectTheme)
      case apiStatusConstraints.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  onchangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  clickPageElement = () => {
    this.setState({displayPage: false})
  }

  noSearchRetryBtnClick = () => {
    this.setState({searchInput: ''}, this.getVideos)
  }

  renderNoSearchContainer = () => (
    <div className="no-search-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
        className="no-search-image"
      />
      <h1 className="no-search-container-heading">No Search results found</h1>
      <p className="no-search-container-description">
        Try different key words or remove search filter
      </p>
      <button
        type="button"
        className="no-search-retry-btn"
        onClick={this.noSearchRetryBtnClick}
      >
        Retry
      </button>
    </div>
  )

  onClickSearchIcon = () => {
    this.renderAfterSearchInputDetails()
  }

  render() {
    const {displayPage} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }

    return (
      <>
        <ThemeSelector.Consumer>
          {value => {
            const {selectTheme} = value
            const {searchInput} = this.state
            return (
              <>
                <Header />
                <BannerContainerHome>
                  <SideContainer />
                  <RightSideHomeContainer
                    outline={selectTheme}
                    ata-testid="banner"
                  >
                    {displayPage ? (
                      <MainBannerContainer>
                        <BannerBgContainer>
                          <BannerBgImg
                            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                            alt="nxt watch logo"
                          />
                          <BgContainerDescription>
                            Buy Nxt Watch Premium prepaid plans with <br />
                            UPI
                          </BgContainerDescription>
                          <BgBtn type="button">GET IT NOW</BgBtn>
                        </BannerBgContainer>
                        <CloseBtn
                          type="button"
                          onClick={this.clickPageElement}
                          data-testid="close"
                        >
                          <AiOutlineClose />
                        </CloseBtn>
                      </MainBannerContainer>
                    ) : null}
                    <HomeVideoContainer outline={selectTheme}>
                      <InputContainer>
                        <InputElement
                          type="search"
                          placeholder="search"
                          value={searchInput}
                          onChange={this.onchangeSearchInput}
                        />
                        <SearchElement
                          outline={selectTheme}
                          type="button"
                          onClick={this.onClickSearchIcon}
                        >
                          <AiOutlineSearch />
                        </SearchElement>
                      </InputContainer>
                      {this.renderVideoList()}
                    </HomeVideoContainer>
                  </RightSideHomeContainer>
                </BannerContainerHome>
              </>
            )
          }}
        </ThemeSelector.Consumer>
      </>
    )
  }
}

export default Home
