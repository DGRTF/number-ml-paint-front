import React, { Component, Suspense } from 'react';
import './Home.scss';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../../components/Header/Header';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import SignInForm from '../../components/SignInForm/SignInForm';

import { stateType } from '../../store/store';

import {
  changeContent,
  contentTypes,
  changeContentType,
} from '../../store/actions/Home/Home';

import HomeSidebar from '../../components/HomeSidebar/HomeSidebar';

const PaintBoard = React.lazy(() => import('../../components/PaintBoard/PaintBoard'));
const VideoStream = React.lazy(() => import('../../components/VideoStream/VideoStream'));

interface ImapDispatchToProps {
  changeContent?: changeContentType;
}

interface ImapStateToProps {
  content?: contentTypes;
}

interface IHomeProps extends ImapDispatchToProps, ImapStateToProps { }

class Home extends Component<IHomeProps> {
  private setContent = () => {
    switch (this.props.content) {
      case 'PaintBoard':
        return <PaintBoard />;
      case 'VideoStream':
        return <VideoStream />;
      default:
        return <PaintBoard />;
    }
  }

  render() {
    return (
      <div className="home">
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
}

const mapStateToProps = (state: stateType) => ({
  content: state.home.content,
});

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({
    changeContent,
  }, dispatch);
}

export default connect<ImapStateToProps, ImapDispatchToProps, IHomeProps, stateType>(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
