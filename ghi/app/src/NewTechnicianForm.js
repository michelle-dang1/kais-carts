import React, { useState } from 'react'

export default function TechnicianForm() {

    const [state, setState] = useState({
        name: '',
        employee_number: ''
    })

    async function handleSubmit(event) {
        event.preventDefault();
        const data = {...state}

        const technicianUrl = `http://localhost:8080/api/technicians/`
        const fetchConfig = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }
        const response = await fetch(technicianUrl, fetchConfig);
        if (response.ok) {
            const newTechnician = await response.json();
            window.location.reload(false)
        }
    }

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Add a new technician</h1>
                    <form onSubmit={handleSubmit} id="create-location-form">
                        <div className="form-floating mb-3">
                            <input onChange={event => setState({...state, name: event.target.value})} placeholder="Name" required type="text" name="name" id="name" className="form-control"/>
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={event => setState({...state, employee_number: Number(event.target.value)})} placeholder="Employee Number" required type="text" name="employee_number" id="employee_number" className="form-control"/>
                            <label htmlFor="employee_number">Employee Number</label>
                        </div>

                        <button className="btn btn-primary">Add Technician</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
