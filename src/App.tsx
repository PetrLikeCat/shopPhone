import Loadable from 'react-loadable';
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

import './scss/app.scss';
import MainLayout from './layouts/MainLayout';
import { Registration } from './pages/Registration';

const Cart = Loadable({
  loader: () => import('./pages/Cart'),
  loading: () => <div>Идёт загрузка корзины...</div>,
});

const FullPhone = React.lazy(() => import('./pages/FullPhone'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/ShopPhone/" element={<Home />} />
        <Route
          path="cart"
          element={
            <Suspense fallback={<div>Идёт загрузка корзины...</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="/phone/:id"
          element={
            <Suspense fallback={<div>Идёт загрузка...</div>}>
              <FullPhone />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Идёт загрузка...</div>}>
              <NotFound />
            </Suspense>
          }
        />
          <Route
          path="/enter"
          element={
            <Suspense fallback={<div>Идёт загрузка...</div>}>
              <Registration />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;