import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

async function loadAppointments() {
  const resp = await fetch('http://localhost:8080/api/appointments/');
  if (resp.ok) {
    const data = await resp.json();
    root.render(
      <React.StrictMode>
        <App appointments={data.appointments} />
      </React.StrictMode>
    )
  } else {
    console.error(resp)
  }
}
loadAppointments();
