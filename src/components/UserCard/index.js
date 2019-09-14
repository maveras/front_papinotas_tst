import React, {useEffect} from 'react'
import { User, ImgContainer, Img, CardAction, Options, CardDetail } from './styles'

export const UserCard = ({ userName, rut, nlist, prescence  }) => {
  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    console.log(userName)
  }, []);
  return (
    <User>
    <Options>
        edit
    </Options>
    <ImgContainer>
      <Img src="https://armandoiachini.com/wp-content/uploads/2016/08/default-user-image.png" alt=""/>
    </ImgContainer>
    <CardDetail>
      <div className="detail">
        <span>{userName}</span>
      </div>
      <div className="detail">
        <span>{rut}</span>
      </div>
      <div className="detail">
        <span>List Number: {nlist}</span>
      </div>
    </CardDetail>
    <CardAction prescence={prescence}>
      <span>{prescence ? 'Present' : 'Absent'}</span>
    </CardAction>
  </User>
  )
}
