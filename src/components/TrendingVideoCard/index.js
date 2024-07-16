import {formatDistanceToNow} from 'date-fns'
import SavedVideosContext from '../../context/SavedVideosContext'
import {
  NavLink,
  TrendingVideoCardLi,
  TrendingThumbnail,
  TrendingVideoDetailsContainer,
  TrendingChannelLogo,
  TrendingChannelDetailsContainer,
  TrendingTitle,
  TrendingNameViewsAndDateContainer,
  TrendingName,
} from './styledComponents'

const TrendingVideoCard = props => {
  const {trendingVideoDetails} = props
  const {
    id,
    publishedAt,
    thumbnailUrl,
    viewCount,
    title,
    channel,
  } = trendingVideoDetails
  const pubDate = formatDistanceToNow(new Date(publishedAt))
  return (
    <SavedVideosContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <NavLink to={`videos/${id}`}>
            <TrendingVideoCardLi>
              <TrendingThumbnail src={thumbnailUrl} alt="video thumbnail" />
              <TrendingVideoDetailsContainer>
                <TrendingChannelLogo
                  src={channel.profileImageUrl}
                  alt="channel logo"
                />
                <TrendingChannelDetailsContainer>
                  <TrendingTitle bgColor={isDark}>{title}</TrendingTitle>
                  <TrendingNameViewsAndDateContainer>
                    <TrendingName bgColor={isDark}>{channel.name}</TrendingName>
                    <TrendingName bgColor={isDark}>{viewCount}</TrendingName>
                    <TrendingName bgColor={isDark}>{pubDate}</TrendingName>
                  </TrendingNameViewsAndDateContainer>
                </TrendingChannelDetailsContainer>
              </TrendingVideoDetailsContainer>
            </TrendingVideoCardLi>
          </NavLink>
        )
      }}
    </SavedVideosContext.Consumer>
  )
}

export default TrendingVideoCard
