import {Component} from 'react'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import Loader from 'react-loader-spinner'
import ThemeSelector from '../../context/ThemeSelector'
import Header from '../Header'
import SideContainer from '../SideContainer'
import GamingVideo from '../GamingVideo'
import {
  GamingContainer,
  RightSideGamingContainer,
  GamingIconContainer,
  GamingIconBgContainer,
  GamingIcon,
  GamingIconDescription,
  UnOrderListContainer,
  GamingLoader,
  FailureImageGaming,
  FailureGamingHeading,
  FailureGamingDescription,
  GamingRetryBtn,
} from './styledComponents'

const apiStatusMode = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
  initial: 'INITIAL',
}

class Gaming extends Component {
  state = {apiStatus: apiStatusMode.initial, gamingVideoList: []}

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusMode.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const gamingData = data.videos.map(eachGame => ({
        id: eachGame.id,
        thumbnailUrl: eachGame.thumbnail_url,
        title: eachGame.title,
        viewCount: eachGame.view_count,
      }))
      this.setState({
        apiStatus: apiStatusMode.success,
        gamingVideoList: gamingData,
      })
    } else {
      this.setState({apiStatus: apiStatusMode.failure})
    }
  }

  renderGamingSuccess = () => {
    const {gamingVideoList} = this.state
    return (
      <UnOrderListContainer>
        {gamingVideoList.map(eachGameVideo => (
          <GamingVideo gamingDetails={eachGameVideo} key={eachGameVideo.id} />
        ))}
      </UnOrderListContainer>
    )
  }

  onClickRetryBtnGaming = () => {
    this.getGamingVideos()
  }

  renderGamingLoader = () => (
    <GamingLoader data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" width="50" height="50" />
    </GamingLoader>
  )

  renderGamingFailure = selectTheme => {
    const failureViewImage = selectTheme
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
    return (
      <GamingLoader>
        <FailureImageGaming src={failureViewImage} alt="failure view" />
        <FailureGamingHeading outline={selectTheme}>
          Oops! Something Went Wrong
        </FailureGamingHeading>
        <FailureGamingDescription outline={selectTheme}>
          We are having some trouble to complete your request. Please try again.
        </FailureGamingDescription>
        <GamingRetryBtn type="button" onClick={this.onClickRetryBtnGaming}>
          Retry
        </GamingRetryBtn>
      </GamingLoader>
    )
  }

  renderGamingDetails = selectTheme => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusMode.success:
        return this.renderGamingSuccess()
      case apiStatusMode.failure:
        return this.renderGamingFailure(selectTheme)
      case apiStatusMode.inProgress:
        return this.renderGamingLoader()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeSelector.Consumer>
        {value => {
          const {selectTheme} = value
          return (
            <>
              <Header />
              <GamingContainer>
                <SideContainer />
                <RightSideGamingContainer
                  outline={selectTheme}
                  data-testid="gaming"
                >
                  <GamingIconContainer outline={selectTheme}>
                    <GamingIconBgContainer outline={selectTheme}>
                      <GamingIcon>
                        <SiYoutubegaming />
                      </GamingIcon>
                    </GamingIconBgContainer>
                    <GamingIconDescription outline={selectTheme}>
                      Gaming
                    </GamingIconDescription>
                  </GamingIconContainer>
                  {this.renderGamingDetails(selectTheme)}
                </RightSideGamingContainer>
              </GamingContainer>
            </>
          )
        }}
      </ThemeSelector.Consumer>
    )
  }
}

export default Gaming
