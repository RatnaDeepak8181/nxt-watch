import {Component} from 'react'
import SavedVideosContext from '../../context/SavedVideosContext'
import {
  SideBarOuterContainer,
  SideBarContainer,
  SideBarList,
  SideBarListItem,
  HomeLink,
  LinkName,
  TrendingLink,
  GamingLink,
  SavingLink,
  ContactContainer,
  ContactHeading,
  ContactLogosContainer,
  ContactLogo,
  ContactDesc,
  NavLink,
} from './styledComponents'

class SideBar extends Component {
  render() {
    return (
      <SavedVideosContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <SideBarOuterContainer bgColor={isDark}>
              <SideBarContainer bgColor={isDark}>
                <SideBarList>
                  <NavLink to="/">
                    <SideBarListItem>
                      <HomeLink bgColor={isDark} />
                      <LinkName bgColor={isDark}>Home</LinkName>
                    </SideBarListItem>
                  </NavLink>
                  <NavLink to="/trending">
                    <SideBarListItem>
                      <TrendingLink bgColor={isDark} />
                      <LinkName bgColor={isDark}>Trending</LinkName>
                    </SideBarListItem>
                  </NavLink>
                  <NavLink to="/gaming">
                    <SideBarListItem>
                      <GamingLink bgColor={isDark} />
                      <LinkName bgColor={isDark}>Gaming</LinkName>
                    </SideBarListItem>
                  </NavLink>
                  <NavLink to="/saved-videos">
                    <SideBarListItem>
                      <SavingLink bgColor={isDark} />
                      <LinkName bgColor={isDark}>Saved videos</LinkName>
                    </SideBarListItem>
                  </NavLink>
                </SideBarList>
                <ContactContainer>
                  <ContactHeading bgColor={isDark}>CONTACT US</ContactHeading>
                  <ContactLogosContainer>
                    <ContactLogo
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                      alt="facebook logo"
                    />
                    <ContactLogo
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                      alt="twitter logo"
                    />
                    <ContactLogo
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                      alt="linked in logo"
                    />
                  </ContactLogosContainer>
                  <ContactDesc bgColor={isDark}>
                    Enjoy! Now to see your channels and recommendations!
                  </ContactDesc>
                </ContactContainer>
              </SideBarContainer>
            </SideBarOuterContainer>
          )
        }}
      </SavedVideosContext.Consumer>
    )
  }
}
export default SideBar
