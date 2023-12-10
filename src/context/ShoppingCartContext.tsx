import { useState, createContext, useContext } from 'react';
import ShoppingCart from '../components/ShoppingCart';
import  useLocalStorage  from "../hooks/useLocalStorage"
//🤔asって何？
const ShoppingCartContext = createContext({} as ShoppingCartContext);

//🌸defines the props that the ShoppingCartProvider component will accept. For now, it only accepts children.
type ShoppingCartProviderProps = {
  //🤔React.ReactNodeって何？
  children: React.ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
};

type ShoppingCartContext = {
  //🤔これらはfunction？なんで名前の横に":"があるの？getItemQuantity = (id: number) => number;じゃないの？
  //🤔なんでreturnがないの？
  //🤔あとvoidってどういうこと？何も返さないの？
  // カートに入れる
  getItemQuantity: (id: number) => number;
  // カートの中身を増やす
  increaseCartQuantity: (id: number) => void;
  // カートの中身を減らす
  decreaseCartQuantity: (id: number) => void;
  // カートから取り除く
  removeFromCart: (id: number) => void;

  // 42:00 cart iconの数字のため
  openCart: () => void;
  closeCart: () => void;
 cartQuantity: number;
 cartItems: CartItem[];

};

//🌸useShoppingCart Hook...is a custom hook that any component can use
//to access the shopping cart's state and functions.
//It's essentially a shortcut to consuming the ShoppingCartContext.
// 🤔🙋‍♀️これが他のファイルでたくさん使われる
export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

// https://reffect.co.jp/react/react-usecontext-understanding/
// のCountContext.js ファイルにも同じようなのがある
export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  //🤔why are there two [ ] ?
  // const [cartItems, setCartItems] = useState<CartItem[]>( [ ]);

    // 57:00 useLocalStorage
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>( "shopping-cart", [ ]);

  // 43:00
  const [ isOpen, setIsOpen ] = useState(false);

  // 🤔🤔なんで0？どこで使われてる？
  const cartQuantity = cartItems.reduce((quantity, item )=> quantity + item.quantity, 0)


  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);


  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity (id: number) {
    setCartItems(currItems => {

       // 🤔=== idのidはどこから来てるの？
       if(currItems.find(item => item.id === id)) {
           // アイテムが存在する場合の処理
           return currItems.map(item => {
               // 🤔=== idのidはどこから来てるの？
               // 🤔なぜ再度ifでid確認？
           if (item.id === id) {
               // 🤔😡
               // item.quantity += 1;
               // 🌸😡該当するアイテムの数量を増やす処理を行った後に、そのアイテムオブジェクトを返す必要があります。
               return {...item, quantity: item.quantity + 1}
           }
           // 🤔なぜreturn item;が必要？
           return item;
           })
       } else {
           // アイテムが存在しない場合の処理
          //  🤔なぜ[ ]?
           return [...currItems, { id, quantity: 1 }];
       }      

    })
 }

 function decreaseCartQuantity (id: number) {
    setCartItems(currItems => {

        // アイテムが存在し、その数量が1であるかどうかを確認
        // 🤔?.quantityって何？
       if(currItems.find(item => item.id === id)?.quantity === 1) {
        // 数量が1のアイテムを配列から除外
        // 🤔なんでfilter？ item.id !== idは現在のidと同じじゃないものを返すってこと？
        return currItems.filter(item => item.id !== id)
       }  
       // 該当のアイテムの数量を1減少させる
       return currItems.map(item => {
        if (item.id === id) {
            return {...item, quantity: item.quantity - 1}
        } else {
            return item;
        }
       })
    })
 }

 function removeFromCart(id: number) {
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== id)
    })
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
        openCart,
        closeCart,
      }}
    >
      {children}
      {/* 🤔何これ  isOpen={isOpen}*/}
      <ShoppingCart isOpen={isOpen}/>
    </ShoppingCartContext.Provider>
  );
}
