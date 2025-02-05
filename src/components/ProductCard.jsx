const ProductCard = ({ vehicle }) => {


    
    return (
        <li key={vehicle.id}>
            <img src={vehicle.image} alt={vehicle.name} />
            <div className="vehicle-details">
                <div className="name">{vehicle.year} {vehicle.brand} {vehicle.name}</div>
                <div className="price">${vehicle.price}</div>
                <div className="engine">{vehicle.engine}</div>
            </div>
        </li>
    );
};

export default ProductCard;
