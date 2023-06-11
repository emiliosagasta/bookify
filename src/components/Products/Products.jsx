import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import libro from "../../assets/libro.jpg";
import "./Products.css";


const Products = () => {
const { data } = useContext(dataContext);
  return data.map((product) => {
    return (
        <div className='card'>
           <img src={libro} alt="img-product-card" />
            <h3>{product.title} </h3>
            <h4>{product.editorial}</h4>
            <h4> $ {product.price}</h4>
            <button>Buy</button>
        </div>
    );
  })
};

export default Products
