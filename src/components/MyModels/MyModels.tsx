import React, { Component } from 'react';
import './MyModels.scss';

export default class MyModels extends Component {
  render() {
    return (
      <div className='my-models'>
        <form onSubmit={this.sendModel.bind(this)}>
          <input type='file'/>
        </form>
      </div>
    )
  }

  async sendModel(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const response = await fetch('AIModels/AddAIModel',{
      body: formData,
    });

    if (response.ok)
      return;
    else
      alert(response.statusText);
  }
}
