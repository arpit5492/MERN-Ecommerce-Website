import { useSelector } from "react-redux";
import "./_filled-cart.scss";

const FilledCart = () => {
  const cart = useSelector(state => state.cr);
  // console.log(cart.cartItems);
  const cartData = cart.cartItems;
  return (
    <div>
      <div className="row my-5">
        <div className="col-8 p-4">
          {
            cartData.map((item) => {
              return (
                <div>
                  <div className="row">
                    <div className="col-4">
                      <img src={item.prod_img} alt={item.pName} />
                    </div>
                    <div className="col-8">
                      <div className="p-3">
                        <span>{item.pName}</span>
                        <div>
                          <span>${item.price}</span>
                        </div>
                        <div>
                          <i className="bi bi-star-fill text-warning"></i>
                          <i className="bi bi-star-fill text-warning"></i>
                          <i className="bi bi-star-fill text-warning"></i>
                          <i className="bi bi-star-fill text-warning"></i>
                          <i className="bi bi-star-fill text-warning"></i>
                        </div>
                        <hr />
                        <div>
                          <div className="btn-group mx-3">
                            <div className="btn btn-outline-dark">
                              <span> - </span>
                            </div>
                            <div className="btn">
                              0
                            </div>
                            <div className="btn btn-outline-dark">
                              <span> + </span>
                            </div>
                          </div>
                          <div className="btn btn-outline-danger mx-4">
                            <span><i class="bi bi-trash3-fill mx-2"></i>Remove Item</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="col-4 px-4 py-3 my-4">
          <h2 className="mb-5">Summary</h2>
          <div>
            <span>Cart total: ${cart.totalItemsPrice} </span>
            <span>Shipping Charges: Free</span>
            <hr />
            <span>Total: ${cart.totalItemsPrice}</span>
            <hr />
          </div>
          <div className="btn btn-outline-dark w-100 mb-4 mt-1">
            Checkout
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilledCart;