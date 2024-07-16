import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavLink = styled(Link)`
  text-decoration: none;
`

export const GamingVideoLi = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`

export const GamingVideoThumbnail = styled.img`
  height: 165px;
  width: 140px;
  @media screen and (min-width: 768px) {
    height: 265px;
    width: 240px;
  }
`
export const GamingTitle = styled.p`
  color: ${props => (props.bgColor ? '#f9f9f9' : '#1e293b')};
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
`
export const GamingViewCount = styled.p`
  color: ${props => (props.bgColor ? '#94a3b8' : '#212121')};
  font-family: 'Roboto';
  font-size: 9px;
  font-weight: 500;
  margin: 0px;
`
