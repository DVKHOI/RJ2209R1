import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getAllProduct } from "../redux/action";

const Shop = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.myReducer);
  // const [productList, setProductList] = useState([])
  // const [cart, setCart] = useState([]);
  const cartList = store.cart;
  const productList = store.productList;
  useEffect(() => {
    dispatch(getAllProduct());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };
  return (
    <div className="container pt-3">
      <h2>Product List</h2>
      <h4>
        Cart:
        <ul>
          {cartList.map((cart) => (
            <li key={cart.id}>
              {cart.title} {cart.count}
            </li>
          ))}
        </ul>
      </h4>
      <table className="table table-hover table-striped table-responsive">
        <thead className="bg-light">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Inventory</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {productList.length > 0 &&
            productList.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.inventory}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to cart
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Shop;
