import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import SavedVideosContext from '../../context/SavedVideosContext'
import {
  NavHeader,
  NavLogo,
  MbNavEleList,
  NavEleItem,
  NavBtn,
  SunNavBtn,
  MoonNavBtn,
  MoonNavEle,
  SunNavEle,
  MenuNavEle,
  LogoutNavEle,
  CloseLogo,
  LgNavEleList,
  LogoutBtn,
  SideBarList,
  SideBarListItem,
  HomeLink,
  LinkName,
  TrendingLink,
  GamingLink,
  SavingLink,
  NavLink,
  CloseBtnContainer,
  CloseBtn,
  PopupContainer,
  BtnPopupContainer,
  ButtonsContainer,
  BtnContainerText,
  LogoutButtonsContainer,
  CancelButton,
  LogoutButton,
} from './styledComponents'

const overlayStyles = {
  backgroundColor: '#fff',
}

class Header extends Component {
  logout = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    return (
      <SavedVideosContext.Consumer>
        {value => {
          const {
            isDark,
            changeTheme,
            showBlurEffect,
            isSunLogoHide,
            isMoonLogoHide,
          } = value
          const onClickHideSun = () => {
            changeTheme()
          }

          const onClickHideMoon = () => {
            changeTheme()
          }

          const activeBlurEffect = () => {
            showBlurEffect()
          }

          return (
            <NavHeader dark={isDark}>
              <Link to="/">
                <NavLogo
                  src={
                    isDark
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
              </Link>
              <MbNavEleList>
                {!isDark ? (
                  <NavEleItem>
                    <MoonNavBtn
                      type="button"
                      moon={isMoonLogoHide}
                      onClick={() => onClickHideMoon()}
                      data-testid="theme"
                    >
                      <MoonNavEle />
                    </MoonNavBtn>
                  </NavEleItem>
                ) : (
                  <NavEleItem>
                    <SunNavBtn
                      type="button"
                      sun={isSunLogoHide}
                      onClick={() => onClickHideSun()}
                      data-testid="theme"
                    >
                      <SunNavEle sunColor={isDark} />
                    </SunNavBtn>
                  </NavEleItem>
                )}

                <Popup
                  modal
                  trigger={
                    <NavEleItem>
                      <NavBtn type="button">
                        <MenuNavEle menuColor={isDark} />
                      </NavBtn>
                    </NavEleItem>
                  }
                  overlayStyle={overlayStyles}
                >
                  {close => (
                    <PopupContainer dark={isDark}>
                      <CloseBtnContainer>
                        <CloseBtn type="button" onClick={() => close()}>
                          <CloseLogo crossColor={isDark} />
                        </CloseBtn>
                      </CloseBtnContainer>
                      <SideBarList>
                        <NavLink to="/">
                          <SideBarListItem>
                            <HomeLink dark={isDark} />
                            <LinkName dark={isDark}>Home</LinkName>
                          </SideBarListItem>
                        </NavLink>
                        <NavLink to="/trending">
                          <SideBarListItem>
                            <TrendingLink dark={isDark} />
                            <LinkName dark={isDark}>Trending</LinkName>
                          </SideBarListItem>
                        </NavLink>
                        <NavLink to="/gaming">
                          <SideBarListItem>
                            <GamingLink dark={isDark} />
                            <LinkName dark={isDark}>Gaming</LinkName>
                          </SideBarListItem>
                        </NavLink>
                        <NavLink to="/saved-videos">
                          <SideBarListItem>
                            <SavingLink dark={isDark} />
                            <LinkName dark={isDark}>SavedVideos</LinkName>
                          </SideBarListItem>
                        </NavLink>
                      </SideBarList>
                    </PopupContainer>
                  )}
                </Popup>
                <BtnPopupContainer>
                  <Popup
                    modal="true"
                    trigger={
                      <NavEleItem>
                        <NavBtn
                          type="button"
                          onClick={() => activeBlurEffect()}
                        >
                          <LogoutNavEle logoutColor={isDark} />
                        </NavBtn>
                      </NavEleItem>
                    }
                    position="bottom center"
                  >
                    {closePopup => (
                      <ButtonsContainer dark={isDark}>
                        <BtnContainerText dark={isDark}>
                          Are you sure you want to logout?
                        </BtnContainerText>
                        <LogoutButtonsContainer>
                          <CancelButton
                            type="button"
                            onClick={() => closePopup()}
                          >
                            Cancel
                          </CancelButton>
                          <LogoutButton type="button" onClick={this.logout}>
                            Confirm
                          </LogoutButton>
                        </LogoutButtonsContainer>
                      </ButtonsContainer>
                    )}
                  </Popup>
                </BtnPopupContainer>
              </MbNavEleList>
              <LgNavEleList>
                {!isDark ? (
                  <NavEleItem>
                    <MoonNavBtn
                      type="button"
                      onClick={() => onClickHideMoon()}
                      moon={isMoonLogoHide}
                    >
                      <MoonNavEle />
                    </MoonNavBtn>
                  </NavEleItem>
                ) : (
                  <NavEleItem>
                    <SunNavBtn
                      type="button"
                      sun={isSunLogoHide}
                      onClick={() => onClickHideSun()}
                    >
                      <SunNavEle sunColor={isDark} />
                    </SunNavBtn>
                  </NavEleItem>
                )}
                <NavEleItem>
                  <NavBtn type="button">
                    <NavLogo
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                      alt="profile"
                    />
                  </NavBtn>
                </NavEleItem>
                <Popup
                  modal="true"
                  trigger={
                    <NavEleItem type="button">
                      <LogoutBtn>Logout</LogoutBtn>
                    </NavEleItem>
                  }
                  position="bottom center"
                >
                  {close => (
                    <ButtonsContainer dark={isDark}>
                      <BtnContainerText dark={isDark}>
                        Are you sure, you want to logout
                      </BtnContainerText>
                      <LogoutButtonsContainer>
                        <CancelButton type="button" onClick={() => close()}>
                          Cancel
                        </CancelButton>
                        <LogoutButton type="button" onClick={this.logout}>
                          Confirm
                        </LogoutButton>
                      </LogoutButtonsContainer>
                    </ButtonsContainer>
                  )}
                </Popup>
              </LgNavEleList>
            </NavHeader>
          )
        }}
      </SavedVideosContext.Consumer>
    )
  }
}
export default withRouter(Header)
