import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
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
