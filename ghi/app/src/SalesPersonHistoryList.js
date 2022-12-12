import { useState, useEffect } from "react";

export default function SalesPersonHistoryList () {
    const [sales, setSales] = useState([]);
    const [salesPeople, setSalesPeople] = useState([]);
    const [selectedSalesPerson, setSelectedSalesPerson] = useState("");
    const [showAll, setShowAll] = useState(true);

    useEffect(() => {
        const getSales = async () => {
            try {
                const response = await fetch('http://localhost:8090/api/sales/');
                const data = await response.json();
                return data['sales'];
            } catch (err) {
                console.err(err.message);
            }
        }
        getSales()
        .then(sales => setSales(sales))
        .catch(console.error)
    }, []);

    useEffect(() => {
        const getSalesPerson = async () => {
            try {
                const response = await fetch('http://localhost:8090/api/salesperson/');
                const data = await response.json();
                const salesPerson = data.sales_person
                return salesPerson
            } catch (err) {
                console.err(err.message);
            }
        }
        getSalesPerson()
        .then(salesPerson => setSalesPeople(salesPerson))
    }, []);

    const handleDropdownChange = (event) => {
        if (event.target.value === "") {
            setShowAll(true)
        } else {
            setShowAll(false)
        }
        setSelectedSalesPerson(event.target.value)
    }

    const intToUSD = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });

    return (
        <div>
            <select onChange={handleDropdownChange}  required name="sales_person_history" id="sales_person_history" className="form-select">
                <option value="">All sales people</option>
                {salesPeople.map(sales_person => {
                        return (
                            <option key={sales_person.employee_number} value={sales_person.name}>
                                {sales_person.name}
                            </option>
                        )})}
            </select>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Sales person</th>
                        <th>Customer</th>
                        <th>VIN</th>
                        <th>Sale price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        showAll ? (
                            sales
                            .map(sale => {
                                return (
                                    <tr key={sale.id}>
                                    <td>{sale.sales_person.name}</td>
                                    <td>{sale.customer.name}</td>
                                    <td>{sale.automobile}</td>
                                    <td>{intToUSD.format(sale.sale_price)}</td>
                                </tr>
                                )
                            })
                        ) : (
                            sales
                            .filter(sale => sale.sales_person.name === selectedSalesPerson)
                            .map(sale => {
                                return (
                                    <tr key={sale.id}>
                                    <td>{sale.sales_person.name}</td>
                                    <td>{sale.customer.name}</td>
                                    <td>{sale.automobile}</td>
                                    <td>{intToUSD.format(sale.sale_price)}</td>
                                </tr>
                                )
                            })
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}
