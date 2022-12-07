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
        "customer_name",
        "appointment_date",
        "reason",
        "technician",
    ]
    encoders={
        "technician": TechnicianEncoder(),
    }

    def get_extra_data(self, o):
        count = len(AutomobileVO.objects.filter(vin=o.vin))
        if count > 0:
            return {"is_vip": True}
        else:
            return {"is_vip": False}
