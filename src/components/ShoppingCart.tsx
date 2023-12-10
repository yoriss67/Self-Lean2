import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import formatCurrency from "../utilities/formatCurrency";
import storeItems from "../data/items.json";

// 🤔何これ
type ShoppingCartProps = {
  isOpen: boolean;
};

const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <Offcanvas
      style={{ fontFamily: " 'Shippori Mincho', serif " }}
      show={isOpen}
      onHide={closeCart}
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body>
        <Stack gap={3}>
          {/* 🤔なんで => ( )なのか？ShoppingCartContext.tsxでは => { }だったのに */}
          {cartItems.map((item) => (
            // 🤔何これ {...item} 🌸itemが{id: 1, quantity: 2}のようなオブジェクトであれば、上記のコードは<CartItem key={1} id={1} quantity={2} />と同等
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                // 🤔StoreItemsはどこから => json
                const item = storeItems.find((i) => i.id === cartItem.id);
                // 🤔なんでitem.priceにitemが入るのか、 cartItem.quantityにcartItemが入るのか？
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
export default ShoppingCart;
