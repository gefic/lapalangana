import { useEffect, useState } from "react";
import promesa from "../../utils/promesa";
import productsMx from "../../utils/products";
import ItemDetail from "../itemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [prods, setProds] = useState({});
  const { idItem } = useParams();

  useEffect(() => {
    promesa(2000, productsMx.find((item) => item.id === parseInt(idItem)))
      .then((result) => setProds(result))
      .catch((err) => console.log(err));
  }, [idItem]);

  return (
    <>
      <ItemDetail productsItem={prods} />
    </>
  );
};

export default ItemDetailContainer;