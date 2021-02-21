import React, { Component } from 'react';
import './MyModels.scss';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '../Button/Button';
import UploadFile from '../UploadFile/UploadFile';
import File from '../File/File';
import List from '../List/List';
import { addAIModel, Models } from '../../api/aiModels';

import { stateType } from '../../store/store';

import {
  getModels,
  getModelsType,
} from '../../store/actions/MyModels/MyModels';

interface ImapDispatchToProps {
  getModels?: getModelsType;
}

interface ImapStateToProps {
  models?: Models[];
}

interface IMyModelsProps extends ImapDispatchToProps, ImapStateToProps { }

class MyModels extends Component<IMyModelsProps> {
  componentDidMount() {
    this.initializeModels();
  }

  private initializeModels=() => {
    this.props.getModels();
  }

  private sendModel=async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    await addAIModel(formData);
    this.props.getModels();
  }

  render() {
    return (
      <div className="my-models">
        <form className="my-models__form" onSubmit={this.sendModel}>
          <UploadFile name="file" />
          <Button name="ить" type="submit" />
        </form>
        <List nameList="Список моделей">
          {this.props.models && this.props.models.length > 0
            ? this.props.models.map(
              (model) => <File key={model.id} fileName={model.name} />,
            )
            : null}
        </List>
      </div>
    );
  }
}

const mapStateToProps = (state: stateType) => ({
  models: state.myModels.models,
});

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({
    getModels,
  }, dispatch);
}

export default connect<ImapStateToProps, ImapDispatchToProps, IMyModelsProps, stateType>(
  mapStateToProps,
  mapDispatchToProps,
)(MyModels);
