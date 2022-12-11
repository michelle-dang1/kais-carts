from django.db import models

# Create your models here.
class AutomobileVO(models.Model):
    import_id = models.CharField(max_length=200, unique=True)
    vin = models.CharField(max_length=17)

    def __str__(self):
        return self.vin

class SalesPerson(models.Model):
    name = models.CharField(max_length=200)
    employee_number = models.PositiveSmallIntegerField()

    def __str__(self):
        return self.name

class PotentialCustomer(models.Model):
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    phone_number = models.PositiveBigIntegerField()

    def __str__(self):
        return self.name

class SalesRecord(models.Model):
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="sales",
        on_delete=models.CASCADE,
    )
    sales_person = models.ForeignKey(
        SalesPerson,
        related_name="sales",
        on_delete=models.CASCADE,
    )
    customer = models.ForeignKey(
        PotentialCustomer,
        related_name="customers",
        on_delete=models.CASCADE,
    )
    sale_price = models.PositiveBigIntegerField()
