import { useState, useEffect} from 'react'
import Carousel from 'react-bootstrap/Carousel';

function MainPage() {

    const [automobileInventory, setAutomobileInventory] = useState([])

    useEffect(() => {
      const getInventory = async () => {
          try {
              const response = await fetch(`http://localhost:8100/api/automobiles/`);
              const data = await response.json();
              return data.autos
          } catch (err) {
              console.error(err.message)
          }
      }
      getInventory()
      .then(inventory => setAutomobileInventory(inventory))
      .catch(console.error)
  }, [])


  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">Kai's Carts</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            The premiere solution for automobile dealership
            management!
          </p>
        </div>
      </div>
        <h3 className="px-4 text-center">Our Inventory</h3>
      <Carousel variant="outline-dark">
        {automobileInventory.map(automobile => {
          return (
            <Carousel.Item key={automobile.id}>
              <img className="d-block w-100" src={automobile.model.picture_url} />
              <Carousel.Caption>
                <h3>{automobile.model.manufacturer.name} - {automobile.model.name}</h3>
                <p>{automobile.year} - {automobile.color}</p>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </>
  );
}

export default MainPage;
