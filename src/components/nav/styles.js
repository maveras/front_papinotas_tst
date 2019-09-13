import styled from 'styled-components'

export const Brand = styled.div`
  img {
    width: 200px;
  }
`

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: #FE9602;
  padding: 0 1rem;
`
export const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  width:50%;
`
export const Item = styled.li`
  list-style: none;
  color: white;
  cursor: pointer;
  /* :hover {
    color
  } */
`