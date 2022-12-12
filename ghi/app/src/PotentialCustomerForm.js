import { useState } from 'react';

export default function PotentialCustomerForm() {
    const [potentialCustomer, setpotentialCustomer] = useState({
        name: "",
        address: "",
        phone_number: "",
    });

    function handleNameChange(event) {
        const value = event.target.value;
        setpotentialCustomer({...potentialCustomer, name: value})
    }

    function handleAddressChange(event) {
        const value = event.target.value;
        setpotentialCustomer({...potentialCustomer, address: value})
    }

    function handlePhoneNumberChange(event) {
        const value = event.target.value;
        setpotentialCustomer({...potentialCustomer, phone_number: value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {...potentialCustomer}

        const potentialCustomerUrl = 'http://localhost:8090/api/customers/';
        const fetchConfig = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }

        const response = await fetch(potentialCustomerUrl, fetchConfig);
        if (response.ok) {
            const newPotentialCustomer = await response.json();
            window.location.reload(false);
        }
    };

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a potential customer</h1>
                    <form onSubmit={handleSubmit} id="create-potential-customer-form">
                    <div className="form-floating mb-3">
                        <input onChange={handleNameChange} value={potentialCustomer.name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={handleAddressChange} value={potentialCustomer.address} placeholder="address" required type="text" name="address" id="address" className="form-control" />
                        <label htmlFor="address">Address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={handlePhoneNumberChange} value={potentialCustomer.phone_number} placeholder="Phone number" required type="number" name="phone_number" id="phone_number" className="form-control" />
                        <label htmlFor="employee_number">Phone number</label>
                    </div>
                    <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
