import React from "react";
import { Card } from "antd";
import { Space } from "antd";
import "./FilmCard.css";

export default class FilmCard extends React.Component {
  render() {
    return (
      <>
        <Card
          title="Default size card"
          extra={<a href="#">More</a>}
          style={{
            width: 400,
          }}
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </>
    );
  }
}
