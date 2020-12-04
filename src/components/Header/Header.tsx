import React, { Component } from 'react'
import Button from '../Button/Button'
import './Header.scss'

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='header__label'></div>
        <div className='header__menu'></div>
        <div className='header__in'>
          <Button name='Войти'/>
          <Button name='Зарегистрироваться'/>
        </div>
      </div>
    )
  }
}
