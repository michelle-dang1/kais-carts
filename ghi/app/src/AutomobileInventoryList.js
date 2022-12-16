import { useState, useEffect} from 'react'

export default function AutomobileInventoryList() {

    const [automobileInventory, setAutomobileInventory] = useState([])

    useEffect(() => {
        const getInventory = async () => {
            try {
                const response = await fetch(`http://localhost:8100/api/automobiles/`);
                const data = await response.json();
                return data.autos
            } catch (err) {
                console.error(err.message)
            }
        }
        getInventory()
        .then(inventory => setAutomobileInventory(inventory))
        .catch(console.error)
    }, [])

    return (
        <div>
            <h1>Automobile Inventory</h1>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>VIN</th>
                        <th>Color</th>
                        <th>Year</th>
                        <th>Model</th>
                        <th>Manufacturer</th>
                    </tr>
                </thead>
                <tbody>
                    {automobileInventory.map(automobile => {
                        return (
                            <tr key={ automobile.id }>
                                <td>{ automobile.vin }</td>
                                <td>{ automobile.color }</td>
                                <td>{ automobile.year }</td>
                                <td>{ automobile.model.name }</td>
                                <td>{ automobile.model.manufacturer.name }</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}
