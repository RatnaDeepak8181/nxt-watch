import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Cookies from 'js-cookie'
import {IoMdClose} from 'react-icons/io'
import SideBar from '../SideBar'
import VideoCard from '../VideoCard'
import Header from '../Header'
import SavedVideosContext from '../../context/SavedVideosContext'
import {
  SideBarAndHomeContainer,
  BannerAndVideoCardContainer,
  BannerContainer,
  BannerDetailsContainer,
  BannerLogo,
  BannerDesc,
  BannerBtnContainer,
  BannerBtn,
  BannerCloseBtn,
  VideosContainer,
  VideoCardUl,
  SearchEleContainer,
  SearchInput,
  SearchBtn,
  SearchIcon,
  NoResultViewContainer,
  NoResultImg,
  NoVideoHeading,
  NoVideoDesc,
  RetryBtn,
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

class Home extends Component {
  state = {
    videosList: [],
    searchInput: '',
    isBannerClosed: false,
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  getHomeVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {searchInput} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
        videosList: updatedVideo,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onRetryToGetResult = () => {
    this.getHomeVideos()
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

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="red" height="50" width="50" />
    </LoaderContainer>
  )

  reRenderVideosList = () => {
    this.setState({searchInput: ''}, this.getHomeVideos)
  }

  renderNoResultView = () => (
    <SavedVideosContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <NoResultViewContainer>
            <NoResultImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoVideoHeading bgColor={isDark}>
              No Search results found
            </NoVideoHeading>
            <NoVideoDesc>
              Try different key words or remove search filter
            </NoVideoDesc>
            <RetryBtn type="button" onClick={this.reRenderVideosList}>
              Retry
            </RetryBtn>
          </NoResultViewContainer>
        )
      }}
    </SavedVideosContext.Consumer>
  )

  onPressEnter = event => {
    if (event.key === 'Enter') {
      this.getHomeVideos()
    }
  }

  onSearchInput = () => {
    this.getHomeVideos()
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  renderSearchInput = () => {
    const {searchInput} = this.state
    // console.log(searchInput)
    return (
      <SavedVideosContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <SearchEleContainer bgColor={isDark}>
              <SearchInput
                type="search"
                placeholder="Search"
                value={searchInput}
                onChange={this.onChangeSearchInput}
                onKeyDown={this.onPressEnter}
                bgColor={isDark}
              />
              <SearchBtn
                type="button"
                onClick={this.onSearchInput}
                bgColor={isDark}
                data-testid="searchButton"
              >
                <SearchIcon bgColor={isDark} />
              </SearchBtn>
            </SearchEleContainer>
          )
        }}
      </SavedVideosContext.Consumer>
    )
  }

  renderVideosList = () => {
    const {videosList} = this.state
    return (
      <SavedVideosContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <VideosContainer bgColor={isDark}>
              {videosList.length === 0 ? (
                this.renderNoResultView()
              ) : (
                <>
                  {this.renderSearchInput()}
                  <VideoCardUl data-testid="home">
                    {videosList.map(eachVideoDetails => (
                      <VideoCard
                        key={eachVideoDetails.id}
                        videoDetails={eachVideoDetails}
                      />
                    ))}
                  </VideoCardUl>
                </>
              )}
            </VideosContainer>
          )
        }}
      </SavedVideosContext.Consumer>
    )
  }

  onCloseBanner = () => {
    this.setState({isBannerClosed: true})
  }

  renderBannerSection = () => {
    const {isBannerClosed} = this.state
    return (
      <BannerContainer isClose={isBannerClosed} data-testid="banner">
        <BannerDetailsContainer>
          <BannerLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
          />
          <BannerDesc>Buy Nxt Watch Premium prepaid plans with UPI</BannerDesc>
          <BannerBtnContainer>
            <BannerBtn type="button">GET IT NOW</BannerBtn>
          </BannerBtnContainer>
        </BannerDetailsContainer>
        <BannerCloseBtn
          type="button"
          onClick={this.onCloseBanner}
          data-testid="close"
        >
          <IoMdClose />
        </BannerCloseBtn>
      </BannerContainer>
    )
  }

  renderApiStatus = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosList()
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
      <SavedVideosContext.Consumer>
        {value => {
          const {isBlur} = value
          return (
            <>
              <Header />
              <SideBarAndHomeContainer blurVal={isBlur}>
                <SideBar />
                <BannerAndVideoCardContainer data-testid="home">
                  {this.renderBannerSection()}
                  {this.renderApiStatus()}
                </BannerAndVideoCardContainer>
              </SideBarAndHomeContainer>
            </>
          )
        }}
      </SavedVideosContext.Consumer>
    )
  }
}
export default Home
