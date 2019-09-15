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
      rut,
      id
    }
  }
`;
const updateUsers = (cache, { data: { changePrescence } }) => {
    console.log('el cache', cache)
    const { users } = cache.readQuery({ query: USERS_QUERY });
    cache.writeQuery({
      query: USERS_QUERY,
      data: { users: users.concat([changePrescence.user]) },
    });
  }
export const ListUsersContainer = () => (
  <Query query={USERS_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return (<div>Loading...</div>)
      if (error) return (<div>Error!</div>)
      return (
        <ListUserContainer>
          <h3>Users List</h3>
          <div className="user-list">
            {
              data.users.map(user => (
                <UserCard
                  id = {user.id}
                  rut = {user.rut}
                  lastName = {user.lastName}
                  userName={user.name}
                  nlist={user.nList}
                  prescense={user.prescense}
                  key={user.id}
                  onChangePrescence= {updateUsers}
                  />
              ))
            }
          </div>
        </ListUserContainer>
      )
    }}
  </Query>
)
