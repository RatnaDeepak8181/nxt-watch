import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`
export const NotFoundImg = styled.img`
  height: 170px;
  width: 170px;
`
export const NotFoundHeading = styled.h1`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
export const NotFoundDesc = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`
