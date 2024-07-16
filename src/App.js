import {Component} from 'react'

import {Route, Switch, Redirect} from 'react-router-dom'
import Login from './components/Login'
// import Header from './components/Header'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import SavedVideosContext from './context/SavedVideosContext'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isSunLogoHide: true,
    isMoonLogoHide: false,
    savedVideosList: [],
    isSaved: false,
    isDark: false,
    isBlur: false,
  }

  showBlurEffect = () => {
    this.setState(prevState => ({isBlur: !prevState.isBlur}))
  }

  deleteSavedVideo = videoDetails => {
    const {savedVideosList} = this.state
    const filteredSavedVideos = savedVideosList.filter(
      each => each.id !== videoDetails.id,
    )
    this.setState({savedVideosList: filteredSavedVideos})
  }

  addSavedVideo = videoDetails => {
    this.setState(prevState => ({
      savedVideosList: [...prevState.savedVideosList, videoDetails],
    }))
  }

  updateSavedVideosList = videoDetails => {
    const {isSaved} = this.state
    if (isSaved) {
      this.deleteSavedVideo(videoDetails)
    } else {
      this.addSavedVideo(videoDetails)
    }
  }

  updateSave = videoDetails => {
    this.setState(
      prevState => ({
        isSaved: !prevState.isSaved,
      }),
      this.updateSavedVideosList(videoDetails),
    )
  }

  changeTheme = () => {
    this.setState(prevState => ({
      isDark: !prevState.isDark,
      isSunLogoHide: !prevState.isSunLogoHide,
      isMoonLogoHide: !prevState.isMoonLogoHide,
    }))
  }

  render() {
    const {
      isSunLogoHide,
      isMoonLogoHide,
      savedVideosList,
      isDark,
      isBlur,
      isSaved,
    } = this.state
    // console.log(isDark)
    return (
      <>
        <SavedVideosContext.Provider
          value={{
            isSunLogoHide,
            isMoonLogoHide,
            savedVideosList,
            isSaved,
            addSavedVideo: this.addSavedVideo,
            deleteSavedVideo: this.deleteSavedVideo,
            updateSave: this.updateSave,
            isDark,
            changeTheme: this.changeTheme,
            isBlur,
            showBlurEffect: this.showBlurEffect,
          }}
        >
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoItemDetails}
            />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideos}
            />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </SavedVideosContext.Provider>
      </>
    )
  }
}

export default App
