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
import AutomobileInventoryList from './AutomobileInventoryList.js';
import NewAutomobileInventoryForm from './NewAutomobileInventoryForm.js';
import TechnicianList from './TechnicianList.js';
import SalesList from './SalesList';
import SalesPersonForm from './SalesPersonForm';
import PotentialCustomerForm from './PotentialCustomerForm';
import SalesRecordForm from './SalesRecordForm';
import SalesPersonHistoryList from './SalesPersonHistoryList';

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
          <Route path="technicians/" element={<TechnicianList />} />
          <Route path="technicians/new/" element={<NewTechnicianForm />} />
          <Route path="manufacturers/" element={<ManufacturerList />} />
          <Route path="manufacturers/new/" element={<NewManufacturerForm />} />
          <Route path="models/" element={<VehicleModelsList />} />
          <Route path="models/new" element={<NewVehicleModelForm />} />
          <Route path="inventory/" element={<AutomobileInventoryList />} />
          <Route path="inventory/new" element={<NewAutomobileInventoryForm />} />
          <Route path="sales/" element={<SalesList />}/>
          <Route path="sales/new/" element={<SalesRecordForm />}/>
          <Route path="salesperson/new/" element={<SalesPersonForm />}/>
          <Route path="customers/new/" element={<PotentialCustomerForm />}/>
          <Route path="salesperson/" element={<SalesPersonHistoryList />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
