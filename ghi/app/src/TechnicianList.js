import { useState, useEffect} from 'react'

export default function TechnicianList() {

    const [technicians, setTechnicians] = useState([])

    useEffect(() => {
        const getTechnicians = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/technicians/')
                const data = await response.json();
                return data.technicians
            } catch (err) {
                console.error(err.message);
            }
        }
        getTechnicians()
        .then(techs => setTechnicians(techs))
        .catch(console.error)
    })

    return (
        <div>
            <h1>Technicians</h1>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Employee Number</th>
                    </tr>
                </thead>
                <tbody>
                    {technicians.map(technician => {
                        return (
                            <tr key={ technician.employee_number }>
                                <td>{ technician.name }</td>
                                <td>{ technician.employee_number }</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}
