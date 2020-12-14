import React, { Component } from 'react';
import Button from '../Button/Button';
import Sidebar from '../Sidebar/Sidebar';



interface ImapDispatchToProps {
}

interface ImapStateToProps {
}

interface IPersonalAccountSideBarProps extends ImapDispatchToProps, ImapStateToProps { }

class PersonalAccountSideBar extends Component<IPersonalAccountSideBarProps> {
  render() {
    return (
      <>
        <Sidebar>
          <Button name='Мои модели'/>
          <></>
        </Sidebar>
      </>
    )
  }
}



import { connect } from 'react-redux';
import { stateType } from '../../store/store';
import { bindActionCreators } from 'redux';




const mapStateToProps = (state: stateType) => {
  return {
  }
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({
  }, dispatch)
}


export default connect<ImapStateToProps, ImapDispatchToProps, IPersonalAccountSideBarProps, stateType>(
  mapStateToProps,
  mapDispatchToProps
)(PersonalAccountSideBar);
