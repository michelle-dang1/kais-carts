import { useState, useEffect } from 'react'

export default function NewVehicleModelForm() {

    const [state, setState] = useState({
        name: '',
        picture_url: '',
        manufacturers: []
    })

    useEffect(() => {
        const getManufacturers = async () => {
            try {
                const response = await fetch(`http://localhost:8100/api/manufacturers/`);
                if (response.ok) {
                    const data = await response.json();
                    return data.manufacturers
                }
            } catch (err) {
                console.error(err.message)
            }
        }
        getManufacturers()
        .then(manufacturers => setState({manufacturers: manufacturers}))
    }, [])

    function handleNameChange(event) {
        const value = event.target.value;
        setState({...state, name: value})
    }

    function handlePictureChange(event) {
        const value = event.target.value;
        setState({...state, picture_url: value})
    }

    function handleManufacturerChange(event) {
        const value = event.target.value;
        setState({...state, manufacturer_id: Number(value)})
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const data = {...state}
        delete data.manufacturers

        const modelUrl = `http://localhost:8100/api/models/`
        const fetchConfig = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }
        const response = await fetch(modelUrl, fetchConfig);
        if (response.ok) {
            const newModel = await response.json();
            window.location.reload(false)
        }
    }

    return (
        <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Create a vehicle model</h1>
                        <form onSubmit={handleSubmit} id="create-location-form">
                            <div className="form-floating mb-3">
                                <input onChange={handleNameChange} placeholder="Name" required type="text" name="name" id="name" className="form-control"/>
                                <label htmlFor="name">Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={handlePictureChange} placeholder="Picture URL" required type="url" name="picture_url" id="picture_url" className="form-control"/>
                                <label htmlFor="picture_url">Picture URL</label>
                            </div>
                            <div className="mb-3">
                                <select onChange={handleManufacturerChange} required name="manufacturer" id="manufacturer" className="form-select">
                                    <option value="">Choose a manufacturer</option>
                                    {state.manufacturers.map(manufacturer => {
                                        return (
                                            <option key={manufacturer.id} value={manufacturer.id}>
                                                {manufacturer.name}
                                            </option>
                                        )
                                    })}
                                </select>
                            </div>
                            <button className="btn btn-primary">Create Model</button>
                        </form>
                    </div>
                </div>
            </div>
    )
}
