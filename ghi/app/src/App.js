import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppointmentList from './AppointmentList.js';
import MainPage from './MainPage';
import Nav from './Nav';
import AppointmentHistory from './AppointmentHistory.js';
import NewAppointmentForm from './NewAppointmentForm';
import NewTechnicianForm from './NewTechnicianForm'
import ManufacturerList from './ManufacturerList.js';
import NewManufacturerForm from './NewManufacturerForm.js';
import VehicleModelsList from './VehicleModelsList.js';
import NewVehicleModelForm from './NewVehicleModelForm.js';

function App() {


  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="appointments/" element={<AppointmentList />} />
          <Route path="appointments/history/" element={<AppointmentHistory />} />
          <Route path="appointments/new/" element={<NewAppointmentForm />} />
          <Route path="technicians/new/" element={<NewTechnicianForm />} />
          <Route path="manufacturers/" element={<ManufacturerList />} />
          <Route path="manufacturers/new/" element={<NewManufacturerForm />} />
          <Route path="vehiclemodels/" element={<VehicleModelsList />} />
          <Route path="vehiclemodels/new" element={<NewVehicleModelForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
