import React, { Component } from 'react';
import './Sidebar.scss';

import Button from '../Button/Button';



interface ImapDispatchToProps {
  showHiddenSidebar?: showHiddenSidebarType;
}

interface ImapStateToProps {
  visible?: boolean;
}

interface ISidebarProps extends ImapDispatchToProps, ImapStateToProps { }

class Sidebar extends Component<ISidebarProps> {
  render() {
    return (
      <div className={`side-bar ${this.props.visible ? '' : 'side-bar_hidden'}`}>
        <Button name='Скрыть'
          handler={this.hiddenSidebar.bind(this)} />
          {this.props.children}
      </div>
    )
  }

  hiddenSidebar() {
    this.props.showHiddenSidebar({
      visible: false,
    });
  }
}



import { connect } from 'react-redux';
import { stateType } from '../../store/store';

import {
  showHiddenSidebar,
  showHiddenSidebarType,
} from "../../store/actions/Sidebar/Sidebar";

import { bindActionCreators } from 'redux';

import {
  changeContent } from '../../store/actions/Home/Home';



const mapStateToProps = (state: stateType) => {
  return {
    visible: state.sidebar.visible,
  }
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({
    showHiddenSidebar,
    changeContent,
  }, dispatch)
}


export default connect<ImapStateToProps, ImapDispatchToProps, ISidebarProps, stateType>(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
