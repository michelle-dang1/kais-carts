import { useState } from 'react'

export default function NewManufacturerForm() {

    const [state, setState] = useState({
        name: '',
    })

    function handleNameChange(event) {
        const value = event.target.value;
        setState({...state, name: value})
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const data = {...state}

        const manufacturerUrl = `http://localhost:8100/api/manufacturers/`
        const fetchConfig = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }
        const response = await fetch(manufacturerUrl, fetchConfig);
        if (response.ok) {
            const newManufacturer = await response.json();
            window.location.reload(false)
        }
    }

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a new manufacturer</h1>
                    <form onSubmit={handleSubmit} id="create-location-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleNameChange} placeholder="Manufacturer Name" required type="text" name="name" id="name" className="form-control"/>
                            <label htmlFor="name">Manufacturer Name</label>
                        </div>
                        <button className="btn btn-primary">Create Manufacturer</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
