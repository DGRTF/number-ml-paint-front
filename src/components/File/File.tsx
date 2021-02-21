import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from '../Button/Button';
import './File.scss';

import {
  getModels,
  getModelsType,
} from '../../store/actions/MyModels/MyModels';
import { stateType } from '../../store/store';
import { deleteModel } from '../../api/aiModels';

interface ImapDispatchToProps {
  getModels?: getModelsType;
}

interface IFileProps extends ImapDispatchToProps {
  fileName: string;
}

class File extends Component<IFileProps> {
  private deleteFile = async () => {
    await deleteModel(this.props.fileName);
    this.props.getModels();
  }

  render() {
    return (
      <div className="file" translate="no">
        <Button name="delete_forever" handler={this.deleteFile} />
        <hr className="file__vertical-line" />
        <Button name="file_download" />
        <hr className="file__vertical-line" />
        <span className="file__name">{this.props.fileName ? this.props.fileName : ''}</span>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({
    getModels,
  }, dispatch);
}

export default connect<{}, ImapDispatchToProps, IFileProps, stateType>(
  null,
  mapDispatchToProps,
)(File);
