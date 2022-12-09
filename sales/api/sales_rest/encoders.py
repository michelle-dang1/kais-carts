from common.json import ModelEncoder
from .models import AutomobileVO, SalesPerson, PotentialCustomer, SalesRecord


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "import_id",
        "vin",
    ]

# Use for adding potential customer 
class PotentialCustomerEncoder(ModelEncoder):
    model = PotentialCustomer
    properties = [
        "name",
        "address",
        "phone_number",
        "id",
    ]

# Use for adding a sales person
class SalesPersonEncoder(ModelEncoder):
    model = SalesPerson
    properties = [
        "name",
        "employee_number",
    ]

# Use for create sale record
class SalesRecordEncoder(ModelEncoder):
    model = SalesRecord
    properties = [
        "sales_person",
        "customer",
        "automobile",
        "sale_price",
        "id",
    ]

    encoders = {
        "sales_person": SalesPersonEncoder(),
        "customer": PotentialCustomerEncoder(),
        "automobile": AutomobileVOEncoder(),
        
    }
    def get_extra_data(self, o):
        return {
            "automobile": o.automobile.vin,
        }
    
