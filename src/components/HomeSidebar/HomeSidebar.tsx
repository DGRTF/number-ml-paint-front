import React, { Component } from 'react'
import Sidebar from '../Sidebar/Sidebar'



interface ImapDispatchToProps {
  showHiddenSidebar?: showHiddenSidebarType;
  changeContent?: changeContentType;
}

interface ImapStateToProps {
  visible?: boolean;
}

interface IHomeSidebarProps extends ImapDispatchToProps, ImapStateToProps { }

class HomeSidebar extends Component<IHomeSidebarProps> {
  render() {
    return (
      <>
        <Sidebar>
          <Button name='Paint board'
            handler={this.openPaintBoard.bind(this)} />
          <Button name='Video stream'
            handler={this.openVideoStream.bind(this)} />
        </Sidebar>
      </>
    )
  }

  openPaintBoard() {
    this.props.changeContent({
      content: 'PaintBoard',
    });
  }

  openVideoStream() {
    this.props.changeContent({
      content: 'VideoStream',
    });
  }
}



import { connect } from 'react-redux';
import { stateType } from '../../store/store';

import {
  showHiddenSidebarType,
} from "../../store/actions/Sidebar/Sidebar";

import { bindActionCreators } from 'redux';

import {
  changeContentType,
  changeContent
} from '../../store/actions/Home/Home';
import Button from '../Button/Button';



const mapStateToProps = (state: stateType) => {
  return {
    visible: state.sidebar.visible,
  }
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({
    changeContent,
  }, dispatch)
}


export default connect<ImapStateToProps, ImapDispatchToProps, IHomeSidebarProps, stateType>(
  mapStateToProps,
  mapDispatchToProps
)(HomeSidebar);
