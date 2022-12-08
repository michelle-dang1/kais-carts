from common.json import ModelEncoder
from .models import AutomobileVO, Technician, Appointment

class AutomobileVODetailEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "import_id",
        "vin",
    ]

class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "name",
        "employee_number"
    ]

class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "vin",
        "id",
        "customer_name",
        "appointment_date",
        "reason",
        "technician",
        "is_finished"
    ]
    encoders={
        "technician": TechnicianEncoder(),
    }

    def get_extra_data(self, o):
        count = len(AutomobileVO.objects.filter(vin=o.vin))
        if count > 0:
            return {"VIP_Status": "VIP"}
        else:
            return {"VIP_Status": ""}
