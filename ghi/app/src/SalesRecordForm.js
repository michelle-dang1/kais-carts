import { useState, useEffect } from 'react';

export default function SalesRecordForm() {
    const [salesRecord, setSalesRecord] = useState({
        automobile: "",
        sales_person: "",
        customer: "",
        sale_price: '',
    });

    const [Automobiles, setAutomobiles] = useState([]);
    const [SalesPeople, setSalesPeople] = useState([]);
    const [Customers, setCustomers] = useState([]);

    useEffect(() => {
        const getAutomobiles = async () => {
            try {
                const resp = await fetch(`http://localhost:8100/api/automobiles/`)
                if (resp.ok) {
                    const data = await resp.json();
                    const automobiles = data.autos
                    return automobiles
                    

                }
            } catch (err) {
                console.error(err.message)
            }
        }
        getAutomobiles()
        .then(automobiles => setAutomobiles(automobiles))
    }, [])

    useEffect(() => {
        const getSalesPerson = async () => {
            try {
                const response = await fetch(`http://localhost:8090/api/salesperson/`)
                if (response.ok) {
                    const data = await response.json();
                    const salesPerson = data.sales_person
                    return salesPerson

                }
            } catch (err) {
                console.error(err.message)
            }
        }
        getSalesPerson()
        .then(salesPerson => setSalesPeople(salesPerson))
    }, [])

    useEffect(() => {
        const getCustomers = async () => {
            try {
                const response = await fetch('http://localhost:8090/api/customers/');
                if (response.ok) {
                    const data = await response.json();
                    const customers = data.potential_customer
                    return customers

                } 
                
            } catch (err) {
                console.log(err.message)
            }
        }
        getCustomers()
        .then(customers => setCustomers(customers))
    }, )

    function handleAutomobileChange(event) {
        console.log(salesRecord);
        const value = event.target.value;
        console.log(value);
        setSalesRecord({...salesRecord, automobile: value})
    }


    function handleSalesPersonChange(event) {
        console.log(salesRecord);
        const value = event.target.value;
        setSalesRecord({...salesRecord, sales_person: value})
        console.log(value)
    }

    function handleCustomerChange(event) {
        console.log(salesRecord);
        const value = event.target.value;
        setSalesRecord({...salesRecord, customer: value})
        console.log(value)
    }

    function handleSalePrice(event) {
        console.log(salesRecord);
        const value = event.target.value;
        setSalesRecord({...salesRecord, sale_price: value})
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = salesRecord

        const salesRecordUrl = 'http://localhost:8090/api/sales/';
        const fetchConfig = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }
        console.log(fetchConfig);

        const response = await fetch(salesRecordUrl, fetchConfig);
        if (response.ok) {
            const newSalesRecord = await response.json();
            //window.location.reload(false);
            console.log(newSalesRecord)
        }


    };

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Record a new sale</h1>
                    <form onSubmit={handleSubmit} id="create-sales-record-form">
                    <div className="mb-3">
                            <select onChange={handleAutomobileChange} required name="automobiles" id="automobiles" className="form-select">
                                <option value="">Choose an automobile</option>
                                {Automobiles.map(automobile => {
                                    return (
                                        <option key={automobile.id} value={automobile.vin}>
                                            {automobile.vin}
                                        </option>
                                    )
                                })}
                            </select>
                    </div>
                    <div className="mb-3">
                            <select onChange={handleSalesPersonChange} required name="sales_people" id="sales_people" className="form-select">
                                <option value="">Choose a sales person</option>
                                {SalesPeople.map(sales_person => {
                                    return (
                                        <option key={sales_person.employee_number} value={sales_person.name}>
                                            {sales_person.name}
                                        </option>
                                    )
                                })}
                            </select>
                    </div>
                    <div className="mb-3">
                            <select onChange={handleCustomerChange} required name="customers" id="customers" className="form-select">
                                <option value="">Choose a customer</option>
                                {Customers.map(customer => {
                                    return (
                                        <option key={customer.id} value={customer.id}>
                                            {customer.name}
                                        </option>
                                    )
                                })}
                            </select>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={handleSalePrice} value={salesRecord.sale_price} placeholder="sale_price" required type="text" name="sale_price" id="sale_price" className="form-control" />
                        <label htmlFor="sale_price">Sale price</label>
                    </div>
                    <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )

    
}
