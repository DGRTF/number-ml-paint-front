import React, { Component } from 'react';
import './UploadFile.scss';



interface IUploadFileProps {
  name: string;
  text?: string;
}

export default class UploadFile extends Component<IUploadFileProps> {
  render() {
    return (
      <label className='upload-file'>
        <span className="upload-file__file-icon" translate='no' >cloud_upload</span>
        <hr className="upload-file__vertical-line" />
        <span className='upload-file__file-name'>{this.props.text ? this.props.text : 'Выберите файл'}</span>
        <input className='upload-file__input'
          name={this.props.name}
          type='file'
          onChange={this.changeFileHandler.bind(this)}
        />
      </label>
    )
  }

  changeFileHandler(ev: React.ChangeEvent<HTMLInputElement>) {
    const name = ev.target.files[0].name;
    ev.target.previousSibling.textContent = name;
  }
}
