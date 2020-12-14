import React, { Component, Suspense } from 'react';
import './Home.scss';

import Header from "../Header/Header";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import SignInForm from "../SignIn/SignInForm";

// import PaintBoard from '../PaintBoard/PaintBoard';
// import VideoStream from '../VideoStream/VideoStream';

const PaintBoard = React.lazy(() => import('../PaintBoard/PaintBoard'));
const VideoStream = React.lazy(() => import('../VideoStream/VideoStream'));



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
        <Suspense fallback={<div>Загрузка...</div>}>
          {this.setContent()}
        </Suspense>
        <HomeSidebar />
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
  }
}


import { connect } from 'react-redux';
import { stateType } from '../../store/store';

import {
  changeContent, contentTypes
} from "../../store/actions/Home/Home";

import { bindActionCreators } from 'redux';
import { changeContentType } from '../../store/actions/Home/Home';
import HomeSidebar from '../HomeSidebar/HomeSidebar';



const mapStateToProps = (state: stateType) => {
  return {
    content: state.home.content,
  };
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({
    changeContent,
  }, dispatch)
}


export default connect<ImapStateToProps, ImapDispatchToProps, IHomeProps, stateType>(
  mapStateToProps,
  mapDispatchToProps
)(Home);
