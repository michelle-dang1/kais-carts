from django.urls import path
from sales_rest.views import (
    api_sales_person, 
    api_sales_person_details,
    api_potential_customer,
    api_potential_customer_details,  
    api_sales_record,
    api_show_sales,
)


urlpatterns = [
    path("salesperson/", api_sales_person, name="api_sales_person"),
    path("salesperson/<int:employee_number>/", api_sales_person_details, name="api_sales_person_details"),
    path("customers/", api_potential_customer, name="api_potential_customer"),
    path("customers/<int:id>/", api_potential_customer_details, name="api_potential_customer_details"),
    path("sales/", api_sales_record, name="api_sales_record"),
    path("sales/<int:employee_number>/", api_show_sales, name="api_show_sales"),
]
