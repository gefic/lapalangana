import ItemCount from "../itemCount/ItemCount";
import { useEffect, useState } from "react";
import ItemList from "../itemList/ItemList";
import promesa from "../../utils/promesa";
import Card from "react-bootstrap/Card";
import productsMx from "../../utils/products";

const ItemListContainer = ({ greeting }) => {
  const [prods, setProds] = useState([]);

  useEffect(() => {
    promesa(2000, productsMx)
      .then((result) => setProds(result))
      .catch((err) => console.log(err));
  }, []);
  
  const onAdd = (cantidad) => {
    alert("Este Gringo va a comprar " + cantidad + " pinches items");
  };

  return (
    <>
      <Card>
        <Card.Body>{greeting}</Card.Body>
      </Card>
      <ItemList productsItem={prods} />
      <ItemCount stock={5} initial={1} onAdd={onAdd} />
    </>
  );
};

export default ItemListContainer;
