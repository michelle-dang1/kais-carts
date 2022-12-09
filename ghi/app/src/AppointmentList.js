import { useState, useEffect } from "react";
import { formatInTimeZone } from 'date-fns-tz';



function AppointmentList() {

    const [myAppointments, setAppointments] = useState([])

    useEffect(() => {
        const getAppointments = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/appointments/`);
                const data = await response.json();
                const appts = data['appointments']
                const filtered = appts.filter(
                    (app) => app.is_finished === false
                )
                return filtered
            } catch (err) {
                console.error(err.message);
            }
        }

        getAppointments()
        .then(appointments => setAppointments(appointments))
        .catch(console.error)
    }, [])


    const handleCancel = async (id) => {
        const resp = await fetch(`http://localhost:8080/api/appointments/${id}/`, { method: "DELETE"});
        const data = await resp.json();
        window.location.reload(false);
    }


    const updateFinished = async (id) => {
        const response = await fetch (`http://localhost:8080/api/appointments/${id}/`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({...myAppointments.id === id, is_finished: true})
        })
        const result = await response.json();
        window.location.reload(false)
    }




    return (
        <div>
            <h1>Service Appointments</h1>

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
                    {myAppointments.map(appointment => {
                        return (
                            <tr key={ appointment.id }>
                                <td>{ appointment.vin }</td>
                                <td>{ appointment.customer_name }</td>
                                <td>{ appointment.VIP_Status }</td>
                                <td>
                                    { formatInTimeZone(appointment.appointment_date, 'Europe/London', 'Pp') }
                                </td>
                                <td>{ appointment.technician.name }</td>
                                <td>{ appointment.reason }</td>
                                <td>
                                    <button className="btn btn-danger" onClick={() =>handleCancel(appointment.id)}>Cancel</button>
                                </td>
                                <td>
                                    <button className="btn btn-success" onClick={() =>updateFinished(appointment.id)}>Finished</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default AppointmentList;
