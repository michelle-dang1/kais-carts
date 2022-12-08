from django.contrib import admin
from sales_rest.models import SalesPerson, PotentialCustomer, SalesRecord

# Register your models here.
@admin.register(SalesPerson)
class SalesPersonAdmin(admin.ModelAdmin):
    pass

@admin.register(PotentialCustomer)
class PotentialCustomerAdmin(admin.ModelAdmin):
    pass

@admin.register(SalesRecord)
class SalesRecordAdmin(admin.ModelAdmin):
    pass
