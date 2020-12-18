import React, { Component } from 'react';
import './MyModels.scss';

import Button from '../Button/Button';
import UploadFile from '../UploadFile/UploadFile';
import File from '../File/File';
import List from '../List/List';



interface ImapDispatchToProps {
  getModels?: getModelsType;
}

interface ImapStateToProps {
  models?: Models[];
}

interface IMyModelsProps extends ImapDispatchToProps, ImapStateToProps { }

class MyModels extends Component<IMyModelsProps> {
  render() {
    return (
      <div className='my-models'>
        <form className='my-models__form' onSubmit={this.sendModel.bind(this)}>
          <UploadFile name='file' />
          <Button name='Отправить' />
        </form>
        <List nameList='Список моделей'>
          {this.props.models && this.props.models.length > 0 ?
            this.props.models.map(model => {
              return <File key={model.id} fileName={model.name} />
            }): null}
        </List>
      </div>
    )
  }

  componentDidMount() {
    this.initializeModels();
  }

  initializeModels() {
    this.props.getModels();
  }

  async sendModel(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const response = await fetch('AIModels/AddAIModel', {
      method: 'POST',
      headers: {
        "Authorization": "Bearer " + localStorage.getItem('access_token'),
        // 'Content-Disposition': 'form-data; name="file"; filename="AISingleNumberModel.onnx"',
      },
      body: formData,
    });

    if (response.ok)
      return;
    else
      alert(response.statusText);
  }
}



import { connect } from 'react-redux';
import { stateType } from '../../store/store';

import {
  getModels,
  getModelsType,
  Models,
} from "../../store/actions/MyModels/MyModels";

import { bindActionCreators } from 'redux';



const mapStateToProps = (state: stateType) => {
  return {
    models: state.myModels.models,
  };
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({
    getModels,
  }, dispatch)
}


export default connect<ImapStateToProps, ImapDispatchToProps, IMyModelsProps, stateType>(
  mapStateToProps,
  mapDispatchToProps
)(MyModels);
