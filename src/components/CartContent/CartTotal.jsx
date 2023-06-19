import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const CartTotal = () => {
    const { cart } = useContext(dataContext); 

    const total = cart.reduce((acumulador, elemento) => acumulador + elemento.price, 0);

    let content;
    if (total <= 50000) {
      content = <h3>Total a pagar: ${total}</h3>;
    } else {
      content = <h3>Total excede el límite de $50,000</h3>;
    }

  return (
    
    <div className="cartTotal">
      <h3>Total a pagar: ${total} </h3>
      {content}
    </div>
  );
}

export default CartTotal;
