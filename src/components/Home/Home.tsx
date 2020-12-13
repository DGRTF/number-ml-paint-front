<<<<<<< HEAD:src/pages/Home/Home.tsx
import React, { Component } from 'react'
import HomeContainer from '../../components/HomeContainer/HomeContainer'

export default class Home extends Component {
  render() {
    return (
      <>
        <HomeContainer/>
      </>
    )
=======
import React, { Component } from "react";
import './Home.scss';

import Header from "../Header/Header";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import SignInForm from "../SignIn/SignInForm";
import Sidebar from "../Sidebar/Sidebar";
import PaintBoard from '../../components/PaintBoard/PaintBoard';
import VideoStream from '../../components/VideoStream/VideoStream';

// const PaintBoard = React.lazy(() => import('../../components/PaintBoard/PaintBoard'));
// const VideoStream = React.lazy(() => import('../../components/VideoStream/VideoStream'));



interface ImapDispatchToProps {
  changeContent?: changeContentType;
}

interface ImapStateToProps {
  content?: contentTypes;
}

interface IHomeProps extends ImapDispatchToProps, ImapStateToProps { }

class Home extends Component<IHomeProps>{
  render() {
    return (
      <div className='home'>
        <Header />
        {this.setContent.bind(this)}
        <Sidebar />
        <RegistrationForm />
        <SignInForm />
      </div>
    );
  }

  setContent() {
    switch (this.props.content) {
      case 'PaintBoard':
        return <PaintBoard />
      case 'VideoStream':
        return <VideoStream />
      default:
        return <PaintBoard />
    }
>>>>>>> 8732a83001ddd044e1b29359dacf35c6f56d9bd8:src/components/Home/Home.tsx
  }
}
