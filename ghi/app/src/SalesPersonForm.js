import { useState } from 'react';

export default function SalesPersonForm() {
    const [salesPerson, setSalesPerson] = useState({
        name: "",
        employee_number: "",
    });

    function handleNameChange(event) {
        const value = event.target.value;
        setSalesPerson({...salesPerson, name: value})
    }

    function handleENChange(event) {
        const value = event.target.value;
        setSalesPerson({...salesPerson, employee_number: value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {...salesPerson}

        const salesPersonUrl = 'http://localhost:8090/api/salesperson/';
        const fetchConfig = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }

        const response = await fetch(salesPersonUrl, fetchConfig);
        if (response.ok) {
            const newSalesPerson = await response.json();
            window.location.reload(false);
        }
    };

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a sales person</h1>
                    <form onSubmit={handleSubmit} id="create-sales-person-form">
                    <div className="form-floating mb-3">
                        <input onChange={handleNameChange} value={salesPerson.name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={handleENChange} value={salesPerson.employee_number} placeholder="Employee number" required type="number" name="employee_number" id="employee_number" className="form-control" />
                        <label htmlFor="employee_number">Employee number</label>
                    </div>
                    <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )  
}
