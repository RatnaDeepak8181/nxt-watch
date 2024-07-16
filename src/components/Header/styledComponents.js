import {Link} from 'react-router-dom'
import {IoMdHome, IoMdClose} from 'react-icons/io'
import {FaFire, FaMoon} from 'react-icons/fa'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {GiHamburgerMenu} from 'react-icons/gi'

// import {FaMoon} from 'react-icons/fa'

import styled from 'styled-components'

export const NavHeader = styled.nav`
  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 22px;
  padding-right: 22px;
  background-color: ${props => (props.dark ? '#212121' : '#f9f9f9')};
  @media screen and (min-width: 767px) {
    padding-left: 44px;
    padding-right: 44px;
  }
`
export const NavLogo = styled.img`
  height: 20px;
  @media screen and (min-width: 767px) {
    height: 30px;
    margin-right: 7px;
  }
`
export const MbNavEleList = styled.ul`
  display: flex;
  padding: 0px;
  display: flex;
  align-items: center;
  list-style-type: none;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const NavEleItem = styled.li``
export const NavBtn = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`
export const MoonNavBtn = styled.button`
  display: ${props => (props.moon ? 'none' : 'flex')};
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`
export const SunNavBtn = styled.button`
  display: ${props => (props.sun ? 'none' : 'flex')};
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`
export const MoonNavEle = styled(FaMoon)`
  @media screen and (min-width: 767px) {
    height: 30px;
    width: 30px;
  }
`
export const SunNavEle = styled(FiSun)`
  color: ${props => (props.sunColor ? '#ffffff' : '')};
  font-weight: 800;
  @media screen and (min-width: 767px) {
    height: 30px;
    width: 30px;
  }
`
export const MenuNavEle = styled(GiHamburgerMenu)`
  color: ${props => (props.menuColor ? '#ffffff' : '')};
  font-weight: 800;
`
export const LogoutNavEle = styled(FiLogOut)`
  color: ${props => (props.logoutColor ? '#ffffff' : '')};
  font-weight: 800;
`
export const CloseLogo = styled(IoMdClose)`
  color: ${props => (props.crossColor ? '#ffffff' : '')};
  font-weight: 800;
`
export const LgNavEleList = styled.ul`
  display: none;
  @media screen and (min-width: 767px) {
    padding: 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style-type: none;
    width: 20%;
  }
`
export const LogoutBtn = styled.button`
  border: 1px solid #3b82f6;
  color: #3b82f6;
  background-color: transparent;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  padding: 6px 12px 6px 12px;
  cursor: pointer;
`
export const SideBarList = styled.ul`
  list-style-type: none;
  padding: 30px;
  margin: 0px;
`
export const SideBarListItem = styled.li`
  display: flex;
  align-items: center;
`
export const HomeLink = styled(IoMdHome)`
  color: ${props => (props.dark ? '#ff0b37' : '#606060')};
`
export const TrendingLink = styled(FaFire)`
  color: ${props => (props.dark ? '#ff0b37' : '#606060')};
`
export const GamingLink = styled(SiYoutubegaming)`
  color: ${props => (props.dark ? '#ff0b37' : '#606060')};
`
export const SavingLink = styled(MdPlaylistAdd)`
  color: ${props => (props.dark ? '#ff0b37' : '#606060')};
`
export const LinkName = styled.p`
  color: ${props => (props.dark ? '#f4f4f4' : '#212121')};
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  margin-left: 10px;
`
export const NavLink = styled(Link)`
  text-decoration: none;
`
export const CloseBtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`
export const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
export const PopupContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.dark ? '#313131' : '')};
`
export const BtnPopupContainer = styled.div``
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 35px 30px 35px;
  background-color: ${props => (props.dark ? '#313131' : '#ffffff')};
  border-radius: 6px;
`
export const BtnContainerText = styled.p`
  color: ${props => (props.dark ? '#ffffff' : '#00306e')};
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
`

export const LogoutButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 175px;
  justify-content: space-between;
`
export const CancelButton = styled.button`
  color: #616e7c;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  background-color: transparent;
  border-radius: 2px;
  border: 1px solid #616e7c;
  outline: none;
  cursor: pointer;
  padding: 6px 12px 6px 12px;
`
export const LogoutButton = styled.button`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  background-color: #3b82f6;
  border-radius: 2px;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 6px 12px 6px 12px;
`
