import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';

const CuscomerFeedback = (props) => {
  return (
    <CardDeck>
      <Card>
        <CardImg top width="100%"  className='rounded' src="https://i.postimg.cc/RhYnBf5m/er-slider.jpg&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Kunal Khairnar</CardTitle>
          <CardSubtitle>pune,Maharashtra</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg className='rounded' top width="100%" src="https://i.postimg.cc/RhYnBf5m/er-slider.jpg&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" className='rounded' src="https://i.postimg.cc/RhYnBf5m/er-slider.jpg&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default CuscomerFeedback;