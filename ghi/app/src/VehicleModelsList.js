import { useState, useEffect } from 'react'

export default function VehicleModelsList() {

    const [vehicleModels, setVehicleModels] = useState([])

    useEffect(() => {
        const getVehicleModels = async () => {
            try {
                const response = await fetch('http://localhost:8100/api/models/');
                const data = await response.json()
                return data.models
            } catch (err) {
                console.error(err.message)
            }
        }
        getVehicleModels()
        .then(models => setVehicleModels(models))
        .catch(console.error)
    }, [])

    return (
        <div>
            <h1>Vehicle Models</h1>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Manufacturer</th>
                        <th>Picture</th>
                    </tr>
                </thead>
                <tbody>
                    {vehicleModels.map(model => {
                        return (
                            <tr key={ model.id }>
                                <td>{ model.name }</td>
                                <td>{ model.manufacturer.name }</td>
                                <td>
                                    <img style={ {width: "20%", height: "20%"} } src={ model.picture_url } />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}
