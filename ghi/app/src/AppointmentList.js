import { useState, useEffect } from "react";
import { format } from 'date-fns';

function AppointmentList(props) {
    const [appointments, setAppointments] = useState([])
    useEffect(() => {
        fetch(`http://localhost:8080/api/appointments/`).then(
            res => setAppointments(res.data)
        )
    })




    const getData = async () => {
        const resp = await fetch(`http://localhost:8080/api/appointments/`);
        const data = await resp.json();
        console.log(data)
        setAppointments(data)
    }

    const handleCancel = async (id) => {
        const resp = await fetch(`http://localhost:8080/api/appointments/${id}/`, { method: "DELETE"});
        const data = await resp.json();
        getData()
        window.location.reload(false);
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
                    {props.appointments.map(appointment => {
                        return (
                            <tr key={appointment.id}>
                                <td>{ appointment.vin }</td>
                                <td>{ appointment.customer_name }</td>
                                <td>{ appointment.VIP_Status }</td>
                                <td>{ format(new Date(appointment.appointment_date), 'Pp') }</td>
                                <td>{ appointment.technician.name }</td>
                                <td>{ appointment.reason }</td>
                                <td>
                                    <button className="btn btn-danger" onClick={() =>handleCancel(appointment.id)}>Cancel</button>
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
