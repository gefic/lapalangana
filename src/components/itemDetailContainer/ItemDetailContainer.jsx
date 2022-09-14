import { useEffect, useState } from "react";
import promesa from "../../utils/promesa";
import productsMx from "../../utils/products";
import ItemDetail from "../itemDetail/ItemDetail";

const ItemDetailContainer = ({ greeting }) => {
  const [prods, setProds] = useState({});

  useEffect(() => {
    promesa(2000, productsMx[1])
      .then((result) => setProds(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <ItemDetail productsItem={prods} />
    </>
  );
};

export default ItemDetailContainer;