import { useEffect, useState } from "react";
import { add } from "../Store/cartSlice";
import { useDispatch } from "react-redux";


export default function Products() {
  const [Products, setProducts] = useState([]);
 const dispatch=useDispatch()

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  function handleClick(product){
dispatch(add(product))
  }
  return (
    
    
    <div className="productsWrapper">
     
      {Products.map((product) => {
        return (
          <div className="card" key={product.id}>
            <p>{product.title}</p>
            <img src={product.image}></img>
            <p>{product.price}</p>
            <button className="btn" onClick={()=>handleClick(product)}>Add to cart</button>
          </div>
        );
      })}
    </div>
  );
}
