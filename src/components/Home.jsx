import React from 'react';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';
import { ChatWindow } from './ChatWindow/ChatWindow';

export const Home = () => {
  return (
    <>
      <Navbar />
      <div className='main-content'>
        <Sidebar />
        <ChatWindow />
      </div>
    </>
  );
};
