import React, { useState } from 'react'
import { UserCard } from '../../components/UserCard'
import { ListUserContainer } from './styles'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const USERS_QUERY = gql`
  query {
    users {
      rut,
      lastName,
      name,
      nList,
      prescense,
      rut
    }
  }
`;

export const ListUsersContainer = () => (
  <Query query={USERS_QUERY}>
    {({ loading, error, data }) => {
      console.log('la data', data)
      if (loading) return (<div>Loading...</div>)
      if (error) return (<div>Error!</div>)
      return (
        <ListUserContainer>
          <h3>Users List</h3>
          <div className="user-list">
            {
              data.users.map(user => (
                <UserCard
                  rut = {user.rut}
                  lastName = {user.lastName}
                  userName={user.name}
                  nlist={user.n_list}
                  prescence={user.prescence}
                  key={user.rut}/>
              ))
            }
          </div>
        </ListUserContainer>
      )
    }}
  </Query>
)
