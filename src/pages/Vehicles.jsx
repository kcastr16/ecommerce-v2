import { useEffect, useState } from 'react';
import axios from 'axios';

const Vehicles = () => {
    const [vehicles, setVehicles] = useState([]);
    const [error, setError] = useState(null);
    const [filteredVehicles, setFilteredVehicles] = useState([]);
    const [priceFilter, setPriceFilter] = useState("all");
    const [bodyFilter, setBodyFilter] = useState("all");
    const [isFilterSet, setIsFilterSet] = useState(false);


  const getVehicles = () => {
    // Fetch vehicles data using Axios
    axios
      .get('http://localhost:5000/getVehicles')
      .then((response) => {
        console.log('Response from server:', response.data); // Log the data from the server
        setVehicles(response.data); // Update state with the fetched data
        setFilteredVehicles(response.data);
      })
      .catch((err) => {
        console.error('Error fetching vehicles:', err);
        setError('Failed to load vehicles');
      });
  };

  const applyFilters = () => {
    let filtered = vehicles;

    if (priceFilter !== "all") {
      if (priceFilter === "low") filtered = filtered.filter(vehicle => vehicle.price < 20000);
      if (priceFilter === "mid") filtered = filtered.filter(vehicle => vehicle.price >= 20000 && vehicle.price <= 50000);
      if (priceFilter === "high") filtered = filtered.filter(vehicle => vehicle.price > 50000);
    }

    if (bodyFilter !== "all") {
      filtered = filtered.filter(vehicle => vehicle.body === bodyFilter);
    }

    setFilteredVehicles(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [priceFilter, bodyFilter]);


  useEffect(() => {
    getVehicles();
  }, []); // Empty dependency array to run once



  return (
    <>
        <div className="hero-img-cont">
            <div className="hero-img-main">
                <h1>Vroom, vroom?</h1>
                <p className="hero-img-txt">Whether it is speed, reliability, or comfort. We are sure to have what you are looking for!</p>
            </div>
            <img src="https://global.discourse-cdn.com/forza/original/4X/f/5/5/f551daffcfde8eb365e3ad9204b0ab5495b3cfb5.jpeg" alt="Supra"></img>
        </div>

        <div className='search'>
            <h2>Our Garage</h2>
            <select onChange={(e) => setPriceFilter(e.target.value)} value={priceFilter}>
                <option value="all">All Prices</option>
                <option value="low">Below $20,000</option>
                <option value="mid">$20,000 - $50,000</option>
                <option value="high">Above $50,000</option>
            </select>
            <select onChange={(e) => setBodyFilter(e.target.value)} value={bodyFilter}>
                <option value="all">All Types</option>
                <option value="Coupe">Coupe</option>
                <option value="Sedan">Sedan</option>
                <option value="Hatchback">Hatchback</option>
            </select>
        </div>

        <div className="car-grid">
            {error && <p>{error}</p>}
            <ul>
                {filteredVehicles.length > 0 ? (
                filteredVehicles.map((vehicle) => (
                    <li key={vehicle.id}>
                    <img src={vehicle.image} alt={vehicle.name} />
                    <div className="vehicle-details">
                        <div className="name">{vehicle.year} {vehicle.brand} {vehicle.name}</div>
                        <div className="price">${vehicle.price}</div>
                        <div className="engine">{vehicle.engine}</div>
                    </div>
                    </li>
                ))
                ) : (
                <p>No vehicles found</p>
                )}
            </ul>
        </div>

    </>
  );
};

export default Vehicles;