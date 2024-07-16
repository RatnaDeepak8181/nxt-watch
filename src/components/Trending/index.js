import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Cookies from 'js-cookie'
import SideBar from '../SideBar'
import TrendingVideoCard from '../TrendingVideoCard'
import Header from '../Header'
import SavedVideosContext from '../../context/SavedVideosContext'
import {
  SideBarAndTrendingContainer,
  LogoContainerAndTrendingVideosContainer,
  TrendingVideoCardUl,
  TrendingContainer,
  TrendingContainerForLogo,
  TrendingLogo,
  TrendingContainerHeading,
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

class Trending extends Component {
  state = {
    trendingVideosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const videosResponse = await fetch(url, options)
    if (videosResponse.ok === true) {
      const videosData = await videosResponse.json()
      // console.log(videosData)
      const updatedVideo = videosData.videos.map(eachVideo => ({
        id: eachVideo.id,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
        channel: {
          name: eachVideo.channel.name,
          profileImageUrl: eachVideo.channel.profile_image_url,
        },
      }))
      // console.log(updatedVideo)
      this.setState({
        trendingVideosList: updatedVideo,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onRetryToGetResult = () => {
    this.getTrendingVideos()
  }

  renderFailureView = () => (
    <FailureViewContainer>
      <FailureImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <FailureViewHeading>Oops! Something Went Wrong</FailureViewHeading>
      <FailureViewDesc>
        We are having some trouble to complete your request. Please try again.
      </FailureViewDesc>
      <FailureRetryBtn type="button" onClick={this.onRetryToGetResult}>
        Retry
      </FailureRetryBtn>
    </FailureViewContainer>
  )

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="red" height="50" width="50" />
    </LoaderContainer>
  )

  renderTrendingLogoContainer = () => (
    <SavedVideosContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <TrendingContainer darkBg={isDark} data-testid="banner">
            <TrendingContainerForLogo darkBg={isDark}>
              <TrendingLogo />
            </TrendingContainerForLogo>
            <TrendingContainerHeading darkBg={isDark}>
              Trending
            </TrendingContainerHeading>
          </TrendingContainer>
        )
      }}
    </SavedVideosContext.Consumer>
  )

  renderTrendingVideosList = () => {
    const {trendingVideosList} = this.state
    return (
      <SavedVideosContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <TrendingVideoCardUl darkBg={isDark} data-testid="trending">
              {trendingVideosList.map(eachTrendingVideo => (
                <TrendingVideoCard
                  key={eachTrendingVideo.id}
                  trendingVideoDetails={eachTrendingVideo}
                />
              ))}
            </TrendingVideoCardUl>
          )
        }}
      </SavedVideosContext.Consumer>
    )
  }

  renderTrendingVideosContainer = () => (
    <LogoContainerAndTrendingVideosContainer data-testid="trending">
      {this.renderTrendingLogoContainer()}
      {this.renderTrendingVideosList()}
    </LogoContainerAndTrendingVideosContainer>
  )

  renderApiStatus = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderTrendingVideosContainer()
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
        <SideBarAndTrendingContainer>
          <SideBar />
          {this.renderApiStatus()}
        </SideBarAndTrendingContainer>
      </>
    )
  }
}
export default Trending
