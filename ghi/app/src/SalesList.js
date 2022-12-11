import { useState, useEffect } from "react"

function SalesList() {
    const [sales, setSales] = useState([]);

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
    }, [])

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Sales person</th>
                    <th>Employee number</th>
                    <th>Customer</th>
                    <th>VIN</th>
                    <th>Sale price</th>
                </tr>
            </thead>
            <tbody>
                {sales.map(sale=>{
                    return (
                    <tr key={sale.id}>
                        <td>{sale.sales_person.name}</td>
                        <td>{sale.sales_person.employee_number}</td>
                        <td>{sale.customer.name}</td>
                        <td>{sale.automobile}</td>
                        <td>{sale.sale_price}</td>
                    </tr>)
                    })
                }
            </tbody>
        </table>
    );
}

export default SalesList;
