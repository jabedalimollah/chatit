import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const WrapperComponent = () => (WrappedComponent) => {
  return (props) => {
    return (
      <>
        <Navbar />
        <WrappedComponent {...props} />
        <Footer />
      </>
    );
  };
};

export { WrapperComponent };
