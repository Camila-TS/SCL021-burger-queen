import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import LogIn from './views/logIn';
import Kitchen from './views/kitchen';
import Orders from './views/orders';
import NoMatch from './views/noMatch';

export default function App() {
  return (
    <BrowserRouter>
      <div className='routes'>
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/kitchen" element={<Kitchen />} />
          <Route path="/" element={<Orders />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
