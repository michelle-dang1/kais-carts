import { NavLink } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap'

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <Dropdown className='nav-item'>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Sales
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item className="nav-item" href="/sales">
                Sales List
              </Dropdown.Item>
              <Dropdown.Item className="nav-item" href="/sales/new">
                Create Sales Record
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className='nav-item'>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Appointments
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item className="nav-item" href="/appointments">
                Appointments List
              </Dropdown.Item>
              <Dropdown.Item className="nav-item" href="/appointments/history">
                Appointment History
              </Dropdown.Item>
              <Dropdown.Item className="nav-item" href="/appointments/new">
                Create Appointment
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className='nav-item'>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Sales Person
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item className="nav-item" href="/salesperson">
                Sales History
              </Dropdown.Item>
              <Dropdown.Item className="nav-item" href="/salesperson/new">
                Create a sales person
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className='nav-item'>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Customers
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item className="nav-item" href="/customers/new">
                Create a potential customer
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className='nav-item'>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Technicians
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item className="nav-item" href="/technicians">
                Technician List
              </Dropdown.Item>
              <Dropdown.Item className="nav-item" href="/technicians/new">
                Create Technician
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className='nav-item'>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Manufacturers
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item className="nav-item" href="/manufacturers">
                Manufacturer List
              </Dropdown.Item>
              <Dropdown.Item className="nav-item" href="/manufacturers/new">
                Create Manufacturer
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className='nav-item'>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Vehicle Models
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item className="nav-item" href="/models">
                Vehicle Model List
              </Dropdown.Item>
              <Dropdown.Item className="nav-item" href="/models/new">
                Create Vehicle Model
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className='nav-item'>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Automobiles
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item className="nav-item" href="/inventory">
                Automobile Inventory
              </Dropdown.Item>
              <Dropdown.Item className="nav-item" href="/inventory/new">
                Add Automobile to Inventory
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
