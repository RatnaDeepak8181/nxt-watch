import {Link} from 'react-router-dom'
import {IoMdHome} from 'react-icons/io'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import styled from 'styled-components'

export const SideBarOuterContainer = styled.div`
  display: none;
  min-height: 100vh;
  background-color: ${props => (props.bgColor ? '#212121' : '#ffffff')};
  @media screen and (min-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 20%;
  }
`
export const SideBarContainer = styled.div`
  display: none;
  height: 100vh;

  @media screen and (min-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
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
  color: ${props => (props.bgColor ? '#ffffff' : '')};
`
export const TrendingLink = styled(FaFire)`
  color: ${props => (props.bgColor ? '#ffffff' : '')};
`
export const GamingLink = styled(SiYoutubegaming)`
  color: ${props => (props.bgColor ? '#ffffff' : '')};
`
export const SavingLink = styled(MdPlaylistAdd)`
  color: ${props => (props.bgColor ? '#ffffff' : '')};
`
export const LinkName = styled.p`
  color: ${props => (props.bgColor ? '#ffffff' : '#212121')};
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  margin-left: 10px;
`
export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`
export const ContactHeading = styled.p`
  color: ${props => (props.bgColor ? '#ffffff' : '#212121')};
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
`
export const ContactLogosContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`
export const ContactLogo = styled.img`
  height: 20px;
  margin-right: 10px;
`
export const ContactDesc = styled.p`
  color: ${props => (props.bgColor ? '#ffffff' : '#212121')};
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
`
export const NavLink = styled(Link)`
  text-decoration: none;
  color: #1e293b;
  background-color: ${props => (props.bgColor ? 'transparent' : '#cbd5e1')};
`
export const RedBg = styled.button`
  background-color: ${props => (props.bgColor ? '#cbd5e1' : 'transparent')};
  width: 100%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
`
