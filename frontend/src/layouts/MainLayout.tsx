import React from 'react';
import Header from './Header';
import StepperBar from './StepperBar';
import Container from './Container';


const MainLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <StepperBar />
      <Container />
    </div>
  );
};

export default MainLayout;
