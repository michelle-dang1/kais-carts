import React, { useState, useEffect} from 'react'

export default function ManufacturerList() {

    const [myManufacturers, setManufacturers] = useState([])

    useEffect(() => {
        const getManufacturers = async () => {
            try {
                const response = await fetch('http://localhost:8100/api/manufacturers/');
                const data = await response.json();
                return data.manufacturers
            } catch (err) {
                console.error(err.message)
            }
        }

        getManufacturers()
        .then(manufacturers => setManufacturers(manufacturers))
    }, [])

    return (
        <div>
            <h1>Manufacturers</h1>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {myManufacturers.map(manufacturer => {
                        return (
                            <tr key={ manufacturer.id }>
                                <td>{ manufacturer.name }</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}
