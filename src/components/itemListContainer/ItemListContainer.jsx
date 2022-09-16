import { useEffect, useState } from "react";
import ItemList from "../itemList/ItemList";
import promesa from "../../utils/promesa";
import productsMx from "../../utils/products";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [prods, setProds] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    if (idCategory) {
      promesa(2000, productsMx.filter((item) => item.category === parseInt(idCategory)))
        .then((result) => setProds(result))
        .catch((err) => console.log(err));
    } else {
      promesa(2000, productsMx)
        .then((result) => setProds(result))
        .catch((err) => console.log(err));
    }
  }, [idCategory]);

  return (
    <>
      <ItemList productsItem={prods} />
    </>
  );
};

export default ItemListContainer;
