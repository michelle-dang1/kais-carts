from django.urls import path
from service_rest.views import api_list_appointments, api_appointment_details, api_list_technicians, api_technician_details

urlpatterns = [
    path("appointments/", api_list_appointments, name="api_list_appointments"),
    # path("appointments/<str:vin>/", api_appointment_details, name="api_appointment_details"),
    path("appointments/<int:id>/", api_appointment_details, name="api_appointment_details"),
    path("technicians/", api_list_technicians, name="api_list_technicians"),
    path("technicians/<int:employee_number>/", api_technician_details, name="api_technician_details"),
]
