import React, { Component } from 'react';
import Button from '../Button/Button';
import './File.scss';



interface IFileProps {
  fileName: string;
}

export default class File extends Component<IFileProps> {
  render() {
    return (
      <div className='file' translate='no'>
        <Button name='delete_forever' />
        <hr className='file__vertical-line' />
        <Button name='file_download' />
        <hr className='file__vertical-line' />
        <span className='file__name'>{this.props.fileName ? this.props.fileName : ''}</span>
      </div>
    )
  }
}
