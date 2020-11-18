import React from "react";
import PaintBoard from '../components/PaintBoard';
import { PageProps } from "gatsby";
import './index.scss';

export default function Home(props: PageProps) {
  return (
    <div className='home'>
      <PaintBoard />
    </div>
  );
}
