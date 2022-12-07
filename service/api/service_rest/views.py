from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from .encoders import AutomobileVODetailEncoder, AppointmentEncoder, TechnicianEncoder
from .models import AutomobileVO, Technician, Appointment

@require_http_methods(["GET", "POST"])
def api_list_appointments(request):
    appointments = Appointment.objects.order_by("id")
    if request.method == "GET":
        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            technician = Technician.objects.get(id=content["technician"])
            content["technician"] = technician
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid technician employee_number"}
            )

        appointments = Appointment.objects.create(**content)
        return JsonResponse(
            appointments,
            encoder=AppointmentEncoder,
            safe=False
        )

@require_http_methods(["DELETE", "GET", "PUT"])
def api_appointment_details(request, vin):
    if request.method == "GET":
        try:
            appointment = Appointment.objects.get(vin=vin)
            return JsonResponse(
                appointment,
                encoder=AppointmentEncoder,
                safe=False
            )
        except Appointment.DoesNotExist:
            return JsonResponse(
                {"message": "Appointment does not exist"},
                status=404
            )
    elif request.method == "DELETE":
        try:
            appointment = Appointment.objects.get(vin=vin).delete()
            return JsonResponse(
                appointment,
                encoder=AppointmentEncoder,
                safe=False
            )
        except Appointment.DoesNotExist:
            return JsonResponse(
                {"message": "Appointment does not exist"},
                status=400
            )
    else:
        try:
            content = json.loads(request.body)
            Appointment.objects.filter(vin=vin).update(**content)
            appointment = Appointment.objects.get(vin=vin)
            return JsonResponse(
                appointment,
                encoder=AppointmentEncoder,
                safe=False
            )
        except:
            return JsonResponse(
                {"message": "Could not update appointment"}
            )

@require_http_methods(["GET", "POST"])
def api_list_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.order_by("employee_number")
        return JsonResponse(
            {"technicians": technicians},
            encoder= TechnicianEncoder,
            safe=False
        )
    else:
        try:
            content = json.loads(request.body)
            technicians = Technician.objects.create(**content)
            return JsonResponse(
                technicians,
                encoder=TechnicianEncoder,
                safe=False
            )
        except:
            return JsonResponse(
                {"message": "Could not create technician"}
            )

@require_http_methods(["DELETE", "GET", "PUT"])
def api_technician_details(request, employee_number):
    if request.method == "GET":
        try:
            technician = Technician.objects.get(employee_number=employee_number)
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe=False
            )
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Technician does not exist"}
            )
    elif request.method == "DELETE":
        try:
            technician = Technician.objects.get(employee_number=employee_number).delete()
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe=False
            )
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Technician does not exist"},
                status=400
            )
    else:
        try:
            content = json.loads(request.body)
            Technician.objects.filter(employee_number=employee_number).update(**content)
            technician = Technician.objects.get(employee_number=employee_number)
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe=False
            )
        except:
            return JsonResponse(
                {"message": "Could not update technician"}
            )
