import React, { Component } from 'react';
import './Sidebar.scss';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '../Button/Button';

import { stateType } from '../../store/store';

import {
  showHiddenSidebar,
  showHiddenSidebarType,
} from '../../store/actions/Sidebar/Sidebar';

import {
  changeContent, changeContentType,
} from '../../store/actions/Home/Home';

interface ImapDispatchToProps {
  showHiddenSidebar?: showHiddenSidebarType;
  changeContent?: changeContentType;
}

interface ImapStateToProps {
  visible?: boolean;
  // eslint-disable-next-line no-undef
  children?: JSX.Element[];
}

interface ISidebarProps extends ImapDispatchToProps, ImapStateToProps {
 }

class Sidebar extends Component<ISidebarProps> {
  private hiddenSidebar = () => {
    this.props.showHiddenSidebar({
      visible: false,
    });
  }

  render() {
    return (
      <div className={`side-bar ${this.props.visible ? '' : 'side-bar_hidden'}`}>
        <Button
          name="Скрыть"
          handler={this.hiddenSidebar}
        />
        <>
          {this.props.children}
        </>
      </div>
    );
  }
}

const mapStateToProps = (state: stateType) => ({
  visible: state.sidebar.visible,
});

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({
    showHiddenSidebar,
    changeContent,
  }, dispatch);
}

export default connect<ImapStateToProps, ImapDispatchToProps, ISidebarProps, stateType>(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
