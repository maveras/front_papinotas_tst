import styled from 'styled-components'

export const User = styled.div`
  border: 1px solid #C5C5C5;
  width: 300px;
  margin-bottom: .3rem;
`
export const Options = styled.div`
  display:flex;
  justify-content: flex-end;
  padding: .3rem;
  cursor: pointer;
`
export const ImgContainer = styled.div`
  /* background: #FE9602; */
`
export const Img = styled.img`
  background: red;
  width: 45px;
  height: 45px;
  border-radius: 50%;
`
export const CardDetail = styled.div`
  padding: 1rem 0;
  .detail {
    padding: .1rem
  }
`
export const CardAction = styled.div`
  background: ${props => props.prescense ? "#1CBC61" : "#E74C3C"};
  padding: 1rem 2rem;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
`