import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Store from '../pages/Store';
import Description from '../pages/Description';
import MyTickets from '../pages/MyTickets';
import MyEvents from '../pages/MyEvents';

export const URLS = {
  STORE: '/',
  EVENT: '/evento',
  MY_TICKETS: '/meus-ingressos',
  MY_EVENTS: '/meus-eventos',
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={URLS.STORE} element={<Store />} />
        <Route path={URLS.EVENT} element={<Description />} />
        <Route path={URLS.MY_TICKETS} element={<MyTickets />} />
        <Route path={URLS.MY_EVENTS} element={<MyEvents />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
