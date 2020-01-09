import React from 'react';
import './App.css';
import MainRoute from './routes/mainroute';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'unistore/react'
import { store } from './store'
 
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <MainRoute />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
