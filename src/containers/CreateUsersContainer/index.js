import React, { useState } from 'react'
import {NewUserCard} from './styles'
import { Mutation, ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';
import { withRouter } from 'react-router-dom'

const CREATE_USER_MUTATION = gql`
mutation ($rut: String!,$name: String!,$last_name: String!, $n_list: String!){
  createUser(input:{
    rut: $rut,
    name: $name,
    lastName: $last_name,
    nList: $n_list
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
export const CreateUsersContainer = withRouter(({history}) => {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [rut, setRut] = useState('')
  const [nList, setNList] = useState('')
  const USERS_QUERY = gql`
  query {
    users {
      rut,
      lastName,
      name,
      nList,
      prescense,
      rut,
      id
    }
  }
`;
  function createUser(cache, createUserMutation) {
    const data = {name, last_name:lastName, rut, n_list:nList}
    createUserMutation({variables: data })
    // history.push('/')
    // const { users } = createUserMutation.readQuery({ query: USERS_QUERY });
    // console.log(users)
    // cache.writeQuery({
    //   query: USERS_QUERY,
    //   data: { users: users.concat([changePrescence.user]) },
    // });
  }
  return (
    <Mutation
      mutation={CREATE_USER_MUTATION}
      variables={{name, lastName, nList, rut}}
    >
    {
      (createUserMutation) => (
        <div>
          <h2>Crear usuario</h2>
          <NewUserCard>
            <div className='Input'>
              <span>Nombre</span>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
              <span>Apellido</span>
              <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
              <span>Rut</span>
              <input type="text" value={rut} onChange={(e) => setRut(e.target.value)}/>
              <span>Nº List</span>
              <input type="text" value={nList} onChange={(e) => setNList(e.target.value)}/>
              <button onClick={() =>  createUser(createUserMutation) }>Crear usuario</button>
            </div>
          </NewUserCard>
        </div>
      )
    }
    </Mutation>
  )
})
