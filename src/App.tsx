import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import UserList from './components/UserList';
import  './style.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Profile from './components/Profile';

function App() {
  return (
    <Provider store={store}>    
      <BrowserRouter>
      <Routes>
        <Route path="*" element={<UserList />} />
        <Route path="/profile/:id" element={<Profile />}/>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
