import React from 'react';
import Button from '../Button/Button';
import './List.scss';

export interface IListProps {
  nameList?: string;
  moreName?: string;
  moreHandler?: () => void;
  // eslint-disable-next-line no-undef
  children: JSX.Element[];
}

export default function List(props: IListProps) {
  return (
    <div className="list">
      <div className="list__header">
        <span className="list__name-list">{props.nameList ? props.nameList : ''}</span>
      </div>
      {props.children}
      <Button
        name={props.moreName ? props.moreName : 'Ещё'}
        handler={props.moreHandler}
      />
    </div>
  );
}
