import { useSelector } from "react-redux";
import { remove } from "../Store/cartSlice";
import { useDispatch } from "react-redux";
export default function Cart() {
  const items = useSelector((state) => state.cart);
const dispatch=useDispatch()

  const handclick = (itemid) => {
    dispatch(remove(itemid))
  };
  return (
    <div>
   
      <h3>Cart</h3>
     
      <div className="productsWrapper">
      {items.map((item) => {
        return (<div className="card" key={item.id}>
          <p>{item.title}</p>
          <img src={item.image}></img>
          <p>{item.price}</p>
          <button className="btn" onClick={() => handclick(item.id)}>
            Remove
          </button>
        </div>);
      })}
      </div>
    </div>
  );
}
