import {Component} from 'react'
import Cookies from 'js-cookie'
import Header from '../Header'

class VideoCardItemDetails extends Component {
  state = {isLoading: false, videoItem: {}}

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

    this.setState({videoItem: newUpdateData, isLoading: true})
  }

  render() {
    const {videoItem} = this.state

    return (
      <>
        <Header />
        <p>person</p>
      </>
    )
  }
}

export default VideoCardItemDetails
