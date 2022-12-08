import { useState, useEffect } from "react";
import { format } from 'date-fns';


function AppointmentHistory() {

    const [myAppointments, setAppointments] = useState([])

    useEffect(() => {
        const getAppointments = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/appointments/`);
                const data = await response.json();
                return data['appointments']
            } catch (err) {
                console.error(err.message);
            }
        }

        getAppointments()
        .then(appointments => setAppointments(appointments))
        .catch(console.error)
    }, [])

    const [query, setQuery] = useState("")

    return (
        <div>
            <h1>Service Appointment History</h1>
            <div>
                <input placeholder="Enter VIN" onChange={event => setQuery(event.target.value)}/>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Vin</th>
                        <th>Customer name</th>
                        <th>VIP Status</th>
                        <th>Date/Time</th>
                        <th>Technician</th>
                        <th>Reason</th>
                    </tr>
                </thead>
                <tbody>
                    {myAppointments.filter(post => {
                        if (query === "") {
                            return post;
                        } else if (post.vin.includes(query)) {
                            return post;
                        }}).map(appointment => {
                        return (
                            <tr key={ appointment.id }>
                                <td>{ appointment.vin }</td>
                                <td>{ appointment.customer_name }</td>
                                <td>{ appointment.VIP_Status }</td>
                                <td>{ format(new Date(appointment.appointment_date), 'Pp') }</td>
                                <td>{ appointment.technician.name }</td>
                                <td>{ appointment.reason }</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default AppointmentHistory;
