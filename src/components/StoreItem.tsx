import './StoreItem.css';

import { Card, Button } from 'react-bootstrap';
import formatCurrency from '../utilities/formatCurrency';
import { useShoppingCart } from '../context/ShoppingCartContext';

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  //🤔これは何をしている？
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
  // const quantity = 0;
  // 😡🙋‍♀️なるほどおお
  //🤔これは何をしている？
  const quantity = getItemQuantity(id);
  return (
    <Card className="h-100">
      <Card.Img variant="top" className='store-item-img' src={imgUrl}  style={{ objectFit: 'cover' }} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            // 🙋‍♀️同じincreaseCartQuantity
            <Button variant='' style={{ backgroundColor: "#438BA3", color: "white"}} className="w-100 hover-shadow"  onClick={() => increaseCartQuantity(id)}>+ Add to Cart</Button>
          ) : (
            <div className="d-flex align-items-center flex-column" style={{ gap: '.5rem' }}>
              <div className="d-flex align-items-center justify-content-center" style={{ gap: '.5rem' }}>
              {/* 🤔なんで{increaseCartQuantity}じゃないの？ */}
                <Button variant='' style={{ backgroundColor: "#438BA3", color: "white"}} className='hover-shadow'  onClick={() => decreaseCartQuantity(id)}>-</Button>
                <div className="fs-3">{quantity} in cart</div>
                 {/* 🙋‍♀️同じincreaseCartQuantity */}
                <Button variant='' style={{ backgroundColor: "#438BA3", color: "white"}} className='hover-shadow' onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              
              <Button variant='' style={{ backgroundColor: "rgb(251, 107, 39)", color: "white"}} className='remove-button' size="sm"  onClick={() => removeFromCart(id)}>
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};
export default StoreItem;
