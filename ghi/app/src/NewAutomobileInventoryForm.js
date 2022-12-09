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
                                <input onChange={event => setState({...state, color: event.target.value})} placeholder="Color" required type="text" name="color" id="color" className="form-control"/>
                                <label htmlFor="color">Color</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={event => setState({...state, year: Number(event.target.value)})} placeholder="Year" required type="number" name="year" id="year" className="form-control"/>
                                <label htmlFor="year">Year</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={event => setState({...state, vin: event.target.value})} placeholder="VIN" required type="text" name="vin" id="vin" className="form-control"/>
                                <label htmlFor="vin">Vin</label>
                            </div>
                            <div className="mb-3">
                                <select onChange={event => setState({...state, model_id: Number(event.target.value)})} required name="manufacturer" id="manufacturer" className="form-select">
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
                            <button className="btn btn-primary">Add Automobile</button>
                        </form>
                    </div>
                </div>
            </div>
    )
}
