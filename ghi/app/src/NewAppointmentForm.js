import React, { useState, useEffect } from 'react'


export default function AppointmentForm() {

    const [state, setState] = useState({
        vin: '',
        customer_name: '',
        appointment_date: '',
        reason: '',
        technicians: []
    })

    useEffect(() => {
        const getTechs = async () => {
            try {
                const resp = await fetch(`http://localhost:8080/api/technicians/`)
                if (resp.ok) {
                    const data = await resp.json();
                    const technicians = data.technicians
                    return technicians

                }
            } catch (err) {
                console.error(err.message)
            }
        }
        getTechs()
        .then(technicians => setState({technicians: technicians}))
    }, [])

    async function handleSubmit(event) {
        event.preventDefault();
        const data = {...state}
        delete data.technicians

        const appointmentUrl = `http://localhost:8080/api/appointments/`
        const fetchConfig = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }
        const response = await fetch(appointmentUrl, fetchConfig);
        if (response.ok) {
            const newAppointment = await response.json();
            window.location.reload(false)
        }
    }



    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a new appointment</h1>
                    <form onSubmit={handleSubmit} id="create-location-form">
                        <div className="form-floating mb-3">
                            <input onChange={event => setState({...state, vin: event.target.value})} placeholder="VIN" required type="text" name="vin" id="vin" className="form-control"/>
                            <label htmlFor="vin">Vin</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={event => setState({...state, customer_name: event.target.value})} placeholder="Customer Name" required type="text" name="customer_name" id="customer_name" className="form-control"/>
                            <label htmlFor="customer_name">Customer Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={event => setState({...state, appointment_date: event.target.value})} placeholder="Appointment Date/time" required type="datetime-local" name="appointment_date" id="appointment_date" className="form-control"/>
                            <label htmlFor="appointment_date">Appointment Date/time</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={event => setState({...state, reason: event.target.value})} placeholder="Reason for Appointment" required type="text" name="reason" id="reason" className="form-control"/>
                            <label htmlFor="reason">Reason</label>
                        </div>
                        <div className="mb-3">
                            <select onChange={event => setState({...state, technician: Number(event.target.value)})} required name="technician" id="technician" className="form-select">
                                <option value="">Choose a technician</option>
                                {state.technicians.map(technician => {
                                    return (
                                        <option key={technician.id} value={technician.id}>
                                            {technician.name}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                        <button className="btn btn-primary">Create Appointment</button>
                    </form>
                </div>
            </div>
        </div>
  )
}