import React from "react";
import { Card } from "antd";
import { Space } from "antd";
import "./FilmCard.css";

export default class FilmCard extends React.Component {
  render() {
    return (
      <Space direction="vertical horizontal" size={16}>
        <Card
          title="Film Title"
          style={{
            width: 400,
          }}
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Space>
    );
  }
}
