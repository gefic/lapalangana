import Item from "../item/Item";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";

const ItemList = ({ productsItem }) => {
  return (
    <>
      <Row xs={"auto"} md={"auto"} lg={"auto"}>
        {productsItem.length ? (
          productsItem.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              category={item.category}
              img={item.img}
              stock={item.stock}
              description={item.description}
            />
          ))
        ) : (
          <center>
            <Spinner animation="border" variant="danger" />
          </center>
        )}
      </Row>
    </>
  );
};

export default ItemList;
