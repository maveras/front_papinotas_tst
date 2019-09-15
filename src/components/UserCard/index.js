import React from 'react'
import { User, ImgContainer, Img, CardAction, Options, CardDetail } from './styles'
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const CHANGE_PRESCENCE_QUERY = gql`
mutation ($id: ID! ){
  changePrescence(input:{
    id: $id
  }) {
    user {
      id,
      rut,
      name,
      lastName,
      prescense,
      nList
    }
    errors
  }
}

`
export const UserCard = ({id, userName, rut, nlist, prescense, onChangePrescence }) => {
  function updatePrescence (changePrescence, id) {
    changePrescence({variables: id})
  }

  return (
    <Mutation
      mutation={CHANGE_PRESCENCE_QUERY}
      update={onChangePrescence}
      variables={{id}}
      >
      {
        (changePrescenceMutation, {data, loading, error}) => (
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
            <CardAction onClick={() => updatePrescence(changePrescenceMutation, id)} prescense={prescense} >
              <span>{prescense ? 'Present' : 'Absent'}</span>
            </CardAction>
          </User>
        )
      }
    </Mutation>
  )
}
