import React, { Component } from 'react'

export default class VideoStream extends Component {
  render() {
    return (
      <div className='video-stream'>
        <Header />
        <RegistrationForm />
        <SignInForm />
      </div>
    )
  }
}
