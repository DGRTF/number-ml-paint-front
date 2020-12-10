import React from "react";
import Header from "../components/Header/Header";
import PaintBoard from '../components/PaintBoard/PaintBoard';
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import { Provider } from 'react-redux';
import store from '../store/store';
import './index.scss';
import SignInForm from "../components/SignIn/SignInForm";
import Sidebar from "../components/Sidebar/Sidebar";



export default function Home() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <div className='home'>
          <Header />
          <PaintBoard />
          <Sidebar/>
          <RegistrationForm />
          <SignInForm />
        </div>
      </Provider>
    </React.StrictMode>
  );
}
