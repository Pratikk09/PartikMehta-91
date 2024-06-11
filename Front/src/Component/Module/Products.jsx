import React, { useState } from "react";
import { Card,Container} from "react-bootstrap";

const Products = () => {
  const [item, setItems] = useState([
    {
      id: 1,
      name: "Laptop",
      price: 45000,
      brand: "HP",
    },
    {
      id: 2,
      name: "Mobile",
      price: 15000,
      brand: "Apple",
    },
  ]);

return(
  <Container  className="d-flex">
    {item.map((i) => {
    return <Card> 
      <Card.Img variant="top" src="https://res.cloudinary.com/dggcrjjv8/image/upload/v1714309705/lyx8yzjooy6ylurpgwlo.png" />
      <Card.Body>
        <Card.Title>{i.name}</Card.Title>
        <Card.Text>
          {i.price}
        </Card.Text>
      </Card.Body>
    </Card>
    })}
  </Container>
)
}


export default Products;