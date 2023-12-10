import storeItems from "../data/items.json";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Stack, Button } from "react-bootstrap/";
import formatCurrency from "../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

function CartItem({ id, quantity }: CartItemProps) {
  const { decreaseCartQuantity } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  // 😧1行で書けるんだ
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        alt=""
        style={{
          width: "125px",
          height: "75px",
          objectFit: "cover",
          border: "5px",
        }}
      />
      <div className="me-auto">
        <div>
          {item.name}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "0.65rem" }}>
              × {quantity}
            </span>
          )}
        </div>
        <div className="text-muted">{formatCurrency(item.price)}</div>
      </div>
      <div className="text-muted">{formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => decreaseCartQuantity(item.id)}
      >
        &minus;
      </Button>
    </Stack>
  );
}
export default CartItem;
