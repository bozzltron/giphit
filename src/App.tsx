import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import Search from './Search'

function App() {

  return (
    <Provider store={store}>
      <Search />
    </Provider>
  );
}

export default App;
