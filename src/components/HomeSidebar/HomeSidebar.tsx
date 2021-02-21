import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Sidebar from '../Sidebar/Sidebar';

import { stateType } from '../../store/store';

import {
  showHiddenSidebarType,
} from '../../store/actions/Sidebar/Sidebar';

import {
  changeContentType,
  changeContent,
} from '../../store/actions/Home/Home';
import Button from '../Button/Button';

interface ImapDispatchToProps {
  showHiddenSidebar?: showHiddenSidebarType;
  changeContent?: changeContentType;
}

interface ImapStateToProps {
  visible?: boolean;
}

interface IHomeSidebarProps extends ImapDispatchToProps, ImapStateToProps { }

class HomeSidebar extends Component<IHomeSidebarProps> {
  private openPaintBoard=() => {
    this.props.changeContent({
      content: 'PaintBoard',
    });
  }

  private openVideoStream=() => {
    this.props.changeContent({
      content: 'VideoStream',
    });
  }

  render() {
    return (
      <>
        <Sidebar>
          <Button
            name="Paint board"
            handler={this.openPaintBoard}
          />
          <Button
            name="Video stream"
            handler={this.openVideoStream}
          />
        </Sidebar>
      </>
    );
  }
}

const mapStateToProps = (state: stateType) => ({
  visible: state.sidebar.visible,
});

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({
    changeContent,
  }, dispatch);
}

export default connect<ImapStateToProps, ImapDispatchToProps, IHomeSidebarProps, stateType>(
  mapStateToProps,
  mapDispatchToProps,
)(HomeSidebar);
