from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .models import AutomobileVO, SalesPerson, PotentialCustomer, SalesRecord
from .encoders import ( 
    PotentialCustomerEncoder, 
    SalesPersonEncoder, 
    SalesRecordEncoder, 
)
import json

# list and create sales person
@require_http_methods(["GET", "POST"])
def api_sales_person(request):
    if request.method == "GET":
        sales_person = SalesPerson.objects.all()
        return JsonResponse(
            {"sales_person": sales_person},
            encoder=SalesPersonEncoder,
        )
    # POST
    else:
        try:
            content = json.loads(request.body)
            sales_person = SalesPerson.objects.create(**content)
            return JsonResponse(
                sales_person,
                encoder=SalesPersonEncoder,
                safe=False,
            )    
        except:
            return JsonResponse(
                {"message": "Couldn't create sales person"}
            )

require_http_methods(["GET", "DELETE", "PUT"])
def api_sales_person_details(request, employee_number):
    if request.method == "GET":
        try:
            sales_person = SalesPerson.objects.get(employee_number=employee_number)
            return JsonResponse(
                sales_person,
                encoder=SalesPersonEncoder,
                safe=False
            )
        except SalesPerson.DoesNotExist:
            return JsonResponse(
                {"message": "Sales person does not exist"},
                status=404
            )
    elif request.method == "DELETE":
        try:
            sales_person = SalesPerson.objects.get(employee_number=employee_number).delete()
            return JsonResponse(
                sales_person,
                encoder=SalesPersonEncoder,
                safe=False
            )
        except SalesPerson.DoesNotExist:
            return JsonResponse(
                {"message": "Sales person not found"},
                status=400
            )
    # PUT method
    else:
        try:
            content = json.loads(request.body)
            SalesPerson.objects.filter(employee_number=employee_number).update(**content)
            sales_person = SalesPerson.objects.get(employee_number=employee_number)
            return JsonResponse(
                sales_person,
                encoder=SalesPersonEncoder,
                safe=False
            )
        except SalesPerson.DoesNotExist:
            return JsonResponse(
                {"message": "Could not update sales person"}
            )


# list and create potential customer
@require_http_methods(["GET", "POST"])
def api_potential_customer(request):
    if request.method == "GET":
        customer = PotentialCustomer.objects.all()
        return JsonResponse(
            {"potential_customer": customer},
            encoder=PotentialCustomerEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            customer = PotentialCustomer.objects.create(**content)
            return JsonResponse(
                customer,
                encoder=PotentialCustomerEncoder,
                safe=False,
            )
        except:
            return JsonResponse(
                {"message": "Couldn't create customer"}
            )

@require_http_methods(["GET", "DELETE", "PUT"])
def api_potential_customer_details(request, id):
    if request.method == "GET":
        try:
            customer = PotentialCustomer.objects.get(id=id)
            return JsonResponse(
                customer,
                encoder=PotentialCustomerEncoder,
                safe=False
            )
        except PotentialCustomer.DoesNotExist:
            return JsonResponse(
                {"message": "Customer does not exist"},
                status=404
            )
    elif request.method == "DELETE":
        try:
            customer = PotentialCustomer.objects.get(id=id).delete()
            return JsonResponse(
                customer,
                encoder=PotentialCustomerEncoder,
                safe=False
            )
        except PotentialCustomer.DoesNotExist:
            return JsonResponse(
                {"message": "Customer not found"},
                status=400
            )
    # PUT method
    else:
        try:
            content = json.loads(request.body)
            PotentialCustomer.objects.filter(id=id).update(**content)
            customer = PotentialCustomer.objects.get(id=id)
            return JsonResponse(
                customer,
                encoder=PotentialCustomerEncoder,
                safe=False
            )
        except PotentialCustomer.DoesNotExist:
            return JsonResponse(
                {"message": "Could not update customer"}
            )

# list sales, create sales record
@require_http_methods(["GET", "POST"])
def api_sales_record(request):
    sales = SalesRecord.objects.order_by("id")
    if request.method == "GET":
        sales = SalesRecord.objects.all()
        return JsonResponse(
            {"sales": sales},
            encoder=SalesRecordEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            automobile = AutomobileVO.objects.get(vin=content["automobile"])
            content["automobile"] = automobile
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid automobile vin"},
                status=400,
            )
        
        try:
            sales_person = SalesPerson.objects.get(name=content["sales_person"])
            content["sales_person"] = sales_person
        except SalesPerson.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid sales person"},
                status=400,
            )
        
        try:
            customer = PotentialCustomer.objects.get(id=content["customer"])
            content["customer"] = customer
        except PotentialCustomer.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid customer"},
                status=400,
            )
        
        sales_records = SalesRecord.objects.create(**content)
        return JsonResponse(
            sales_records,
            encoder=SalesRecordEncoder,
            safe=False,
        )


# Show sales person history
@require_http_methods(["GET"])
def api_show_sales(request, employee_number):
    if request.method == "GET":
        sales = SalesRecord.objects.filter(sales_person__employee_number=employee_number)
        return JsonResponse(
            sales,
            encoder=SalesRecordEncoder,
            safe=False,
        )
