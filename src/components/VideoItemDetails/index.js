import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import Header from '../Header'
import SavedVideosContext from '../../context/SavedVideosContext'
import SideBar from '../SideBar'

import {
  VideoContainer,
  VideoPlayer,
  SideBarAndVideoContainer,
  RenderVideo,
  UpperSection,
  VideoCardTitle,
  ViewAndLikeContainer,
  ViewAndPublishedDateContainer,
  ViewCount,
  LikeBtn,
  DislikeBtn,
  Like,
  DisLike,
  SaveBtn,
  Save,
  Line,
  LowerSection,
  ProfileAndNameAndSubCountContainer,
  Profile,
  NameAndSubCountContainer,
  Name,
  Subscribers,
  Desc,
  LoaderContainer,
  FailureViewContainer,
  FailureImg,
  FailureViewHeading,
  FailureViewDesc,
  FailureRetryBtn,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    videoData: {},
    apiStatus: apiStatusConstants.initial,
    isLiked: false,
    isDisLiked: false,
  }

  componentDidMount() {
    this.getVideoData()
  }

  getVideoData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
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
    const response = await fetch(`https://apis.ccbp.in/videos/${id}`, options)
    if (response.ok === true) {
      const data = await response.json()
      const videoDetails = data.video_details
      //  console.log(videoDetails)
      const updatedData = {
        id: videoDetails.id,
        description: videoDetails.description,
        publishedAt: videoDetails.published_at,
        thumbnailUrl: videoDetails.thumbnail_url,
        title: videoDetails.title,
        videoUrl: videoDetails.video_url,
        viewCount: videoDetails.view_count,
        channel: {
          name: videoDetails.channel.name,
          profileImageUrl: videoDetails.channel.profile_image_url,
          subscriberCount: videoDetails.channel.subscriber_count,
        },
        isSave: false,
      }
      // console.log(updatedData)
      this.setState({
        videoData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="red" height="50" width="50" />
    </LoaderContainer>
  )

  onRetryToGetResult = () => {
    this.getVideoData()
  }

  renderFailureView = () => (
    <SavedVideosContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <FailureViewContainer>
            <FailureImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
              alt="failure view"
            />
            <FailureViewHeading bgColor={isDark}>
              Oops! Something Went Wrong
            </FailureViewHeading>
            <FailureViewDesc>
              We are having some trouble to complete your request. Please try
              again.
            </FailureViewDesc>
            <FailureRetryBtn type="button" onClick={this.onRetryToGetResult}>
              Retry
            </FailureRetryBtn>
          </FailureViewContainer>
        )
      }}
    </SavedVideosContext.Consumer>
  )

  renderVideoDetailsBottomSection = () => {
    const {videoData} = this.state
    const {channel, description} = videoData
    if (channel === undefined) {
      return null
    }
    return (
      <SavedVideosContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <LowerSection>
              <ProfileAndNameAndSubCountContainer>
                <Profile src={channel.profileImageUrl} alt="channel logo" />
                <NameAndSubCountContainer>
                  <Name bgColor={isDark}>{channel.name}</Name>
                  <Subscribers>
                    {channel.subscriberCount} Subscribers
                  </Subscribers>
                </NameAndSubCountContainer>
              </ProfileAndNameAndSubCountContainer>
              <Desc bgColor={isDark}>{description}</Desc>
            </LowerSection>
          )
        }}
      </SavedVideosContext.Consumer>
    )
  }

  onClickDislike = () => {
    this.setState(prevState => ({
      isDisLiked: !prevState.isDisLiked,
      isLiked: false,
    }))
  }

  onClickLike = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisLiked: false,
    }))
  }

  renderVideoDetailsUpperSection = () => (
    <SavedVideosContext.Consumer>
      {value => {
        const {videoData, isLiked, isDisLiked} = this.state
        const {id, title, viewCount, publishedAt} = videoData
        if (publishedAt === undefined) {
          return null
        }

        const pubDate = formatDistanceToNow(new Date(publishedAt))

        const {updateSave, savedVideosList, isDark, isSaved} = value

        const present = savedVideosList.find(each => each.id === id)

        const saveText = present !== undefined ? 'Saved' : 'Save'

        return (
          <UpperSection>
            <VideoCardTitle bgColor={isDark}>{title}</VideoCardTitle>
            <ViewAndLikeContainer>
              <ViewAndPublishedDateContainer>
                <ViewCount>{viewCount} views</ViewCount>
                <ViewCount>{pubDate} ago</ViewCount>
              </ViewAndPublishedDateContainer>
              <ViewAndPublishedDateContainer>
                <LikeBtn
                  type="button"
                  onClick={this.onClickLike}
                  likeColorChange={isLiked}
                >
                  <Like likeColorChange={isLiked} /> Like
                </LikeBtn>
                <DislikeBtn
                  type="button"
                  onClick={this.onClickDislike}
                  dislikeColorChange={isDisLiked}
                >
                  <DisLike dislikeColorChange={isDisLiked} /> Dislike
                </DislikeBtn>
                <SaveBtn
                  onClick={() => updateSave(videoData)}
                  saveColorChange={isSaved}
                >
                  <Save saveColorChange={isSaved} /> {saveText}
                </SaveBtn>
              </ViewAndPublishedDateContainer>
            </ViewAndLikeContainer>
            <Line />
          </UpperSection>
        )
      }}
    </SavedVideosContext.Consumer>
  )

  renderVideoPlayer = () => {
    const {videoData} = this.state
    return (
      <VideoContainer>
        <VideoPlayer
          url={videoData.videoUrl}
          height={350}
          width="100"
          controls
        />
      </VideoContainer>
    )
  }

  renderVideoItemDetails = () => (
    <SavedVideosContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <RenderVideo bgColor={isDark} data-testid="videoItemDetails">
            {this.renderVideoPlayer()}
            {this.renderVideoDetailsUpperSection()}
            {this.renderVideoDetailsBottomSection()}
          </RenderVideo>
        )
      }}
    </SavedVideosContext.Consumer>
  )

  renderApiStatus = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideoItemDetails()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <SideBarAndVideoContainer>
          <SideBar />
          {this.renderApiStatus()}
        </SideBarAndVideoContainer>
      </>
    )
  }
}
export default VideoItemDetails
