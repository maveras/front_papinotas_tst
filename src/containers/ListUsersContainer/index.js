import React, { useState } from 'react'

import { UserCard } from '../../components/UserCard'
import { ListUserContainer } from './styles'
export const ListUsersContainer = () => {
  // const [users, setusers] = useState([])
  const users = [
    {
      rut: '153323-8',
      name: 'Marcelo',
      lastName: 'vera',
      prescence: false,
      n_list: '2'
    },
    {
      rut: '15332aa3-8',
      name: 'Susana',
      lastName: 'Ardiles',
      prescence: true,
      n_list: '4'
    },
    {
      rut: '15332aa3-8',
      name: 'Susana',
      lastName: 'Ardiles',
      prescence: true,
      n_list: '4'
    },
    {
      rut: '15332aa3-8',
      name: 'Susana',
      lastName: 'Ardiles',
      prescence: true,
      n_list: '4'
    }
  ]
  return (
    <ListUserContainer>
      <h3>Users List</h3>
      <div className="user-list">
        {
          users.map(user => (
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
}
