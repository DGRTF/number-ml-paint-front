import React from "react";
import Header from "../components/Header/Header";
import PaintBoard from '../components/PaintBoard/PaintBoard';
import './index.scss';

export default function Home() {
  return (
    <div className='home'>
      <Header/>
      <PaintBoard />
    </div>
  );
}
