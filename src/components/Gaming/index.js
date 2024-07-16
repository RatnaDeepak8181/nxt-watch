import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Cookies from 'js-cookie'
import SideBar from '../SideBar'
import GamingVideoCard from '../GamingVideoCard'
import Header from '../Header'
import SavedVideosContext from '../../context/SavedVideosContext'
import {
  SideBarAndGamingContainer,
  LogoContainerAndGamingVideosContainer,
  GamingVideoCardUl,
  GamingContainer,
  GamingContainerForLogo,
  GamingLogo,
  GamingContainerHeading,
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

class Gaming extends Component {
  state = {
    gamingVideosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const videosResponse = await fetch(url, options)
    if (videosResponse.ok === true) {
      const videosData = await videosResponse.json()
      console.log(videosData)
      const updatedVideo = videosData.videos.map(eachVideo => ({
        id: eachVideo.id,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
      }))
      // console.log(updatedVideo)
      this.setState({
        gamingVideosList: updatedVideo,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onRetryToGetResult = () => {
    this.getGamingVideos()
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

  renderGamingLogoContainer = () => (
    <SavedVideosContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <GamingContainer darkBg={isDark} data-testid="banner">
            <GamingContainerForLogo darkBg={isDark}>
              <GamingLogo />
            </GamingContainerForLogo>
            <GamingContainerHeading darkBg={isDark}>
              Gaming
            </GamingContainerHeading>
          </GamingContainer>
        )
      }}
    </SavedVideosContext.Consumer>
  )

  renderGamingVideosList = () => {
    const {gamingVideosList} = this.state
    console.log(gamingVideosList)
    return (
      <SavedVideosContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <GamingVideoCardUl darkBg={isDark} data-testid="gaming">
              {gamingVideosList.map(eachGamingVideo => (
                <GamingVideoCard
                  key={eachGamingVideo.id}
                  gamingVideoDetails={eachGamingVideo}
                />
              ))}
            </GamingVideoCardUl>
          )
        }}
      </SavedVideosContext.Consumer>
    )
  }

  renderGamingVideosContainer = () => (
    <LogoContainerAndGamingVideosContainer data-testid="gaming">
      {this.renderGamingLogoContainer()}
      {this.renderGamingVideosList()}
    </LogoContainerAndGamingVideosContainer>
  )

  renderApiStatus = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderGamingVideosContainer()
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
        <SideBarAndGamingContainer>
          <SideBar />
          {this.renderApiStatus()}
        </SideBarAndGamingContainer>
      </>
    )
  }
}
export default Gaming
