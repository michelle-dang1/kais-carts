from django.db import models
from django.urls import reverse

class AutomobileVO(models.Model):
    import_id = models.CharField(max_length=50)
    vin = models.CharField(max_length=17)

    def __str__(self):
        return self.vin

class Technician(models.Model):
    name = models.CharField(max_length=200)
    employee_number = models.PositiveIntegerField(unique=True)

    def __str__(self):
        return self.name

class Appointment(models.Model):
    vin = models.CharField(max_length=17)
    customer_name = models.CharField(max_length=200)
    appointment_date = models.DateTimeField(auto_now_add=False)
    reason = models.TextField()

    technician = models.ForeignKey(
        Technician,
        related_name="appointment",
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return self.vin
