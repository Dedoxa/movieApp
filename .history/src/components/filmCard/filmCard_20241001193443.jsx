import React from "react";
import { Card, Flex } from "antd";
import { Space } from "antd";
import "./FilmCard.css";

export default class FilmCard extends React.Component {
  render() {
    return (
      <Space direction="vertical horizontal" size={20}>
        <Card
          className="filmCard"
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Space>
    );
  }
}
