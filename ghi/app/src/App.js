import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppointmentList from './AppointmentList.js';
import MainPage from './MainPage';
import Nav from './Nav';

function App(props) {

  if (props.appointments === undefined) {
    return null;
  }
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">

        {/* <App /> */}
        {/* <AppointmentList appointments={props.appointments} /> */}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="appointments/" element={<AppointmentList appointments={props.appointments} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
