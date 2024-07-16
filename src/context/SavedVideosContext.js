import React from 'react'

const SavedVideosContext = React.createContext({
  isSunLogoHide: true,
  isMoonLogoHide: false,
  isSaved: false,
  savedVideosList: [],
  addSavedVideo: () => {},
  deleteSavedVideo: () => {},
  updateSave: () => {},
  isDark: false,
  changeTheme: () => {},
  isBlur: false,
  showBlurEffect: () => {},
  reduceBlurEffect: () => {},
  isLiked: false,
  isDisLiked: false,
})
export default SavedVideosContext
