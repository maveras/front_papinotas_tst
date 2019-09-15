import React from 'react'
import { NavBar, List, Brand, Item } from './styles'
import { Link } from 'react-router-dom'


export const Nav = () => (
  <NavBar>
    <Brand>
      <img src="https://papinotas.cl/wp-content/themes/papinotas/img/logo-blanco.png" alt=""/>
    </Brand>
    <List>
      <Link to='/'>
        <Item >Listar Usuarios</Item>
      </Link>
      <Link to='/createUser'>
        <Item >Crear Usuarios</Item>
      </Link>
    </List>
  </NavBar>
)