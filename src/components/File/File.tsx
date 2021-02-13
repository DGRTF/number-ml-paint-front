import React, { Component } from 'react';
import Button from '../Button/Button';
import './File.scss';


interface ImapDispatchToProps {
  getModels?: getModelsType;
}

interface IFileProps extends ImapDispatchToProps {
  fileName: string;
}

class File extends Component<IFileProps> {
  render() {
    return (
      <div className='file' translate='no'>
        <Button name='delete_forever' handler={this.deleteFile.bind(this)} />
        <hr className='file__vertical-line' />
        <Button name='file_download' />
        <hr className='file__vertical-line' />
        <span className='file__name'>{this.props.fileName ? this.props.fileName : ''}</span>
      </div>
    )
  }

  private async deleteFile() {
    await deleteModel(this.props.fileName);
    this.props.getModels();
  }
}


import {
  getModels,
  getModelsType,
} from "../../store/actions/MyModels/MyModels";
import { stateType } from '../../store/store';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { deleteModel } from '../../api/aiModels';



function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({
    getModels,
  }, dispatch)
}


export default connect<{}, ImapDispatchToProps, IFileProps, stateType>(
  null,
  mapDispatchToProps
)(File);
