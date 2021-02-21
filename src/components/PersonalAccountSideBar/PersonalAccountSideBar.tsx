import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '../Button/Button';
import Sidebar from '../Sidebar/Sidebar';

import { stateType } from '../../store/store';

interface ImapDispatchToProps {
}

interface ImapStateToProps {
}

interface IPersonalAccountSideBarProps extends ImapDispatchToProps, ImapStateToProps { }

function PersonalAccountSideBar() {
  return (
    <>
      <Sidebar>
        <Button name="Мои модели" />
        <></>
      </Sidebar>
    </>
  );
}

const mapStateToProps = () => ({
});

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({
  }, dispatch);
}

export default connect<
  ImapStateToProps,
  ImapDispatchToProps,
  IPersonalAccountSideBarProps,
  stateType>(
    mapStateToProps,
    mapDispatchToProps,
  )(PersonalAccountSideBar);
