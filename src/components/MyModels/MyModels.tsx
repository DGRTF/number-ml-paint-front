import React, { Component } from 'react';
import Button from '../Button/Button';
import UploadFile from '../UploadFile/UploadFile';
import './MyModels.scss';

export default class MyModels extends Component {
  render() {
    return (
      <div className='my-models'>
        <form className='my-models__form' onSubmit={this.sendModel.bind(this)}>
          <UploadFile name='model' />
          <Button name='Отправить' />
        </form>
      </div>
    )
  }

  async sendModel(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const response = await fetch('AIModels/AddAIModel', {
      method: 'POST',
      headers: {
        "Authorization": "Bearer " + localStorage.getItem('access_token'),
        // 'Content-Type':'multipart/form-data',
        'Content-Disposition': 'form-data; name="file"; filename="AISingleNumberModel.onnx"',
        // 'Content-Type': 'application/octet-stream'
      },
      body: formData,
    });

    if (response.ok)
      return;
    else
      alert(response.statusText);
  }
}
