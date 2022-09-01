import React from "react";

const items = [
  {
    id: 1,
    name: "Fito Paez",
    price: 25
  },
  {
    id: 2,
    name: "Mercedes Sosa",
    price: 33
  },
  {
    id: 3,
    name: "Charly García",
    price: 25
  }
];

const compras = () => {
  const [cart, setCart] = React.useState([]);
  const cartTotal = cart.reduce((total, { price = 0 }) => total + price, 0);

  const addToCart = (item) => setCart((currentCart) => [...currentCart, item]);

  const removeFromCart = (item) => {
    setCart((currentCart) => {
      const indexOfItemToRemove = currentCart.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (indexOfItemToRemove === -1) {
        return currentCart;
      }

      return [
        ...currentCart.slice(0, indexOfItemToRemove),
        ...currentCart.slice(indexOfItemToRemove + 1)
      ];
    });
  };

  const amountOfItems = (id) => cart.filter((item) => item.id === id).length;

  const listItemsToBuy = () =>
    items.map((item) => (
      <div key={item.id}>
        {item.name}: {item.price}
        <button type="submit" onClick={() => addToCart(item)}>
          Agregar 1 disco
        </button>
      </div>
    ));

  const listItemsInCart = () =>
    items.map((item) => (
      <div key={item.name}>
        {item.name} = {amountOfItems(item.id)} x {item.price} 
        <button type="submit" onClick={() => removeFromCart(item)}>
          Quitar 1 disco
        </button>
      </div>
    ));

  return (
    <div>
      Discos Disponibles:
      <div>{listItemsToBuy()}</div>
      <div>Lista de compras:</div>
      <div>{listItemsInCart()}</div>
      <div>Total: ${cartTotal}</div>
      <div>
        <button onClick={() => setCart([])}>Clear</button>
      </div>
    </div>
  );
};

export default compras;
