import React from 'react';
import BackwardCounter from './components/BackwardCounter';
import ForwardCounter from './components/ForwardCounter';
import Test from './components/Test';

function App() {
  return (
    <React.Fragment>
      <ForwardCounter />
      <BackwardCounter />
      <Test/>
    </React.Fragment>
  );
}

export default App;
