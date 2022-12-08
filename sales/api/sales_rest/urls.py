from django.urls import path
from sales_rest.views import (
    api_sales_person, 
    api_potential_customer,  
    api_sales_record,
    api_show_sales,
)


urlpatterns = [
    path("salesperson/", api_sales_person, name="api_sales_person"),
    path("customers/", api_potential_customer, name="api_potential_customer"),
    path("sales/", api_sales_record, name="api_sales_record"),
    path("sales/<int:pk>/", api_show_sales, name="api_show_sales"),
]
