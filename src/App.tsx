import React from 'react';
import AppRouter from './AppRouter';
import Header from './components/common/Header';

const App = () => {
  return (
    <AppRouter >
      <Header />
    </AppRouter>
  );
};

export default App;