import styled from 'styled-components'

export const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.darkBg ? '#231f20' : '#f8fafc')};
`
export const FormContainer = styled.form`
  border: none;
  border-radius: 6px;
  background-color: ${props => (props.darkBg ? '#000000' : '#ffffff')};
  display: flex;
  flex-direction: column;
  padding: 30px 15px 30px 15px;
  @media screen and (min-width: 768px) {
    padding: 60px;
  }
`
export const FormLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 22px;
  @media screen and (min-width: 768px) {
    margin-bottom: 44px;
  }
`
export const FormLogo = styled.img`
  height: 30px;
  @media screen and (min-width: 768px) {
    height: 30px;
  }
`
export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => (props.labelColor ? '#ffffff' : '#7e858e')};
  font-weight: 600;
  @media screen and (min-width: 768px) {
    font-size: 10px;
  }
`
export const Input = styled.input`
  height: 30px;
  width: 250px;
  background-color: transparent;
  border: 1px solid ${props => (props.darkBg ? '#64748b' : '#e2e8f0')};
  outline: none;
  margin-top: 6px;
  margin-bottom: 12px;
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => (props.darkBg ? '#e2e8f0' : '#7e858e')};
  font-weight: 400;
  padding: 5px 10px 5px 10px;
  @media screen and (min-width: 768px) {
    font-size: 10px;
  }
`
export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`
export const CheckboxInput = styled.input`
  height: 15px;
  width: 15px;
  margin-right: 5px;
  @media screen and (min-width: 768px) {
    height: 12px;
    width: 12px;
  }
`
export const CheckboxDesc = styled.label`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => (props.labelColor ? '#ffffff' : '#1e293b')};
  font-weight: 600;
  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`
export const LoginBtn = styled.button`
  font-family: 'Roboto';
  font-size: 15px;
  color: #ffffff;
  font-weight: 500;
  background-color: #3b82f6;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  padding-top: 8px;
  padding-bottom: 8px;
  @media screen and (min-width: 768px) {
    font-size: 10px;
  }
`
export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #ff0b37;
  font-weight: 500;
`
