import React, { Component } from 'react';
import Button from '../Button/Button';
import './List.scss';



interface IListProps {
  nameList?: string;
  moreName?: string;
  moreHandler?: () => void;
}

export default class List extends Component<IListProps> {
  render() {
    return (
      <div className='list'>
        <div className='list__header'>
          <span className='list__name-list'>{this.props.nameList ? this.props.nameList : ''}</span>
        </div>
        {this.props.children}
        <Button name={this.props.moreName ? this.props.moreName : 'Ещё'}
          handler={this.props.moreHandler} />
      </div>
    )
  }
}
