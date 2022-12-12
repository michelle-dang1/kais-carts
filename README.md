# CarCar

Team:

* Michelle Dang - Sales microservice
* Dan Berk - Service microservice

## Design

## Service microservice

Created a poller to get the information from the inventory microservice. Created models for the data received from the poller, for Technicians, and for Appointments. Registered all models to the admin. Created view functions to list and create technicians and appointments as well as functions to show the details for a specific technician/appointment, to edit or update technicians/appointments, and to delete technicians/appointments. Created urls for my appointment and technician views. For the front-end portion, I created several react apps. I created one to list the appointments in the system and can cancel them or mark them as finished, one to list all appointments even if they are finished and the ability to search for a specific vehicle's service history by their vin, and created a form to create service appointments. I also created react apps for the technicians. There is one to list all of the technicians names and employee numbers, and a form to add new technicians into the system.

## Sales microservice

Created models for the sales person, potential customer, sales record, and an Automobile VO, which obtains the data from the poller. The poller collects the data from the inventory microservice, which gets the list of automobile objects. After registering the models in the admin, I created CRUD functions for the sales people and potential customers. For the sales record, I made view functions to list the sales people, create a sales person, and show the sales person details. Each of the view functions have its respective url path. Using the views, I created a React application that listed all of the sales and gave the user an option to select a specific sales person and show the sales made in the sales history list. The user can also create a sales person, a potential customer, and a sales record. In order to create a sales record, there must be an automobile VIN registered in the inventory, an exisiting sales person and customer. 
