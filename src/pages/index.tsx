import React from "react";
import { Provider } from 'react-redux';
import store from '../store/store';
import './index.scss';
import Home from "../components/Home/Home";


export default function Index() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <div className='index'>
          <Home />
        </div>
      </Provider>
    </React.StrictMode>
  );
}