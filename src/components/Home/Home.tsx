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
  }
}



import { connect } from 'react-redux';
import { stateType } from '../../store/store';

import {
  contentTypes,
  changeContent,
  changeContentType
} from "../../store/actions/Home/Home";

import { bindActionCreators } from 'redux';



const mapStateToProps = (state: stateType) => {
  return {
    content: state.home.content,
  }
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
