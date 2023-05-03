import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {GoFlame} from 'react-icons/go'
import ThemeSelector from '../../context/ThemeSelector'
import Header from '../Header'
import TrendingVideoCard from '../TrendingVideoCard'
import {
  TrendingContainer,
  BannerTrendingContainer,
  BannerContainerSuccess,
  FlameContainer,
  IconElement,
  Description,
  BannerVideoContainer,
  HeadingElement,
  ImageElement,
  FailureDescription,
  TrendingBtn,
} from './styledComponents'
import SideContainer from '../SideContainer'

const apiStatusValue = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
  initial: 'InITIAL',
}

class Trending extends Component {
  state = {apiStatus: apiStatusValue.initial, trendingVideoList: []}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusValue.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const requestUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(requestUrl, options)
    if (response.ok === true) {
      const responseData = await response.json()
      const newResponseData = responseData.videos.map(eachVideo => ({
        channel: eachVideo.channel,
        id: eachVideo.id,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
      }))

      this.setState({
        apiStatus: apiStatusValue.success,
        trendingVideoList: newResponseData,
      })
    } else {
      this.setState({apiStatus: apiStatusValue.failure})
    }
  }

  onClickTrendingRetryBtn = () => {
    this.getTrendingVideos()
  }

  renderSuccessView = () => (
    <ThemeSelector.Consumer>
      {value => {
        const {selectTheme} = value
        const {trendingVideoList} = this.state
        console.log(trendingVideoList)
        return (
          <>
            <BannerContainerSuccess
              outline={selectTheme}
              data-testid="trending"
            >
              <BannerTrendingContainer outline={selectTheme}>
                <FlameContainer>
                  <IconElement outline={selectTheme}>
                    <GoFlame />
                  </IconElement>
                  <Description outline={selectTheme}>Trending</Description>
                </FlameContainer>
              </BannerTrendingContainer>
              <BannerVideoContainer>
                {trendingVideoList.map(eachCard => (
                  <TrendingVideoCard cardDetails={eachCard} key={eachCard.id} />
                ))}
              </BannerVideoContainer>
            </BannerContainerSuccess>
          </>
        )
      }}
    </ThemeSelector.Consumer>
  )

  renderFailureBannerView = () => (
    <ThemeSelector.Consumer>
      {value => {
        const {selectTheme} = value
        const failureImageUrl = selectTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        return (
          <BannerContainerSuccess outline={selectTheme}>
            <ImageElement src={failureImageUrl} alt="failure view" />
            <HeadingElement outline={selectTheme}>
              Oops! Something Went Wrong
            </HeadingElement>
            <FailureDescription>
              We are having some trouble to complete your request.Please try
              again
            </FailureDescription>
            <TrendingBtn type="button" onClick={this.onClickTrendingRetryBtn}>
              Retry
            </TrendingBtn>
          </BannerContainerSuccess>
        )
      }}
    </ThemeSelector.Consumer>
  )

  renderLoaderViewTrending = () => (
    <ThemeSelector.Consumer>
      {value => {
        const {selectTheme} = value
        return (
          <BannerContainerSuccess outline={selectTheme} data-testid="loader">
            <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
          </BannerContainerSuccess>
        )
      }}
    </ThemeSelector.Consumer>
  )

  renderVideoDetails = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusValue.success:
        return this.renderSuccessView()
      case apiStatusValue.failure:
        return this.renderFailureBannerView()
      case apiStatusValue.inProgress:
        return this.renderLoaderViewTrending()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <TrendingContainer>
          <SideContainer />
          {this.renderVideoDetails()}
        </TrendingContainer>
      </>
    )
  }
}

export default Trending
