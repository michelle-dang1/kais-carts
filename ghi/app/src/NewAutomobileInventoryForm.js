import { useState, useEffect} from 'react'

export default function NewAutomobileInventoryForm() {

    const [state, setState] = useState({
        color: '',
        year: '',
        vin: '',
        models: []
    })

    useEffect(() => {
        const getModels = async () => {
            try {
                const response = await fetch(`http://localhost:8100/api/models/`);
                if (response.ok) {
                    const data = await response.json();
                    return data.models
                }
            } catch (err) {
                console.error(err.message)
            }
        }
        getModels()
        .then(models => setState({models: models}))
    }, [])

    function handleColorChange(event) {
        const value = event.target.value;
        setState({...state, color: value})
    }
    function handleYearChange(event) {
        const value = event.target.value;
        setState({...state, year: Number(value)})
    }
    function handleVinChange(event) {
        const value = event.target.value;
        setState({...state, vin: value})
    }
    function handleModelChange(event) {
        const value = event.target.value;
        setState({...state, model_id: Number(value)})
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const data = {...state}
        delete data.models

        const automobileUrl = `http://localhost:8100/api/automobiles/`
        const fetchConfig = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }
        const response = await fetch(automobileUrl, fetchConfig);
        if (response.ok) {
            const newAutomobile = await response.json();
            window.location.reload(false)
        }
    }

    return (
        <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Add an automobile to inventory</h1>
                        <form onSubmit={handleSubmit} id="create-location-form">
                            <div className="form-floating mb-3">
                                <input onChange={handleColorChange} placeholder="Color" required type="text" name="color" id="color" className="form-control"/>
                                <label htmlFor="color">Color</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={handleYearChange} placeholder="Year" required type="number" name="year" id="year" className="form-control"/>
                                <label htmlFor="year">Year</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={handleVinChange} placeholder="VIN" required type="text" name="vin" id="vin" className="form-control"/>
                                <label htmlFor="vin">Vin</label>
                            </div>
                            <div className="mb-3">
                                <select onChange={handleModelChange} required name="manufacturer" id="manufacturer" className="form-select">
                                    <option value="">Choose a model</option>
                                    {state.models.map(model => {
                                        return (
                                            <option key={model.id} value={model.id}>
                                                {model.name}
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
