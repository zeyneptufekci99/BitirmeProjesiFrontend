import { Col, Container, Row } from "react-grid-system";

import Card from "../Card/Card";

const List = (props) => {
  return (
    <Container align="center" justify="center">
      <Row align="center" justify="center" debug>
        {props.list.map((item, index) => (
          <Col lg={4} md={8} sm={8} xs={8} key={index}>
            <Card
              id={item.id}
              name={item.name}
              imageUrl={item.imageUrl}
              isLiked={props.isFavorite}
              type={props.type}
            ></Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default List;
