import React from "react";
import Table from "./Table";

const ProductTable = () => {
  return (
    <div>
      <Table.TableContainer>
        <Table.THead>
          <Table.Row>
            <Table.ColumnHeader>Name</Table.ColumnHeader>
            <Table.ColumnHeader>Price</Table.ColumnHeader>
          </Table.Row>
        </Table.THead>

        <Table.TBody>
          <Table.Row>
            <Table.ColumnHeader colspan="2">Sporting Goods</Table.ColumnHeader>
          </Table.Row>
          <Table.Row>
            <Table.Column>FootBall</Table.Column>
            <Table.Column>$49.99</Table.Column>
          </Table.Row>
          <Table.Row>
            <Table.Column>BaseBall</Table.Column>
            <Table.Column>$49.99</Table.Column>
          </Table.Row>
          <Table.Row>
            <Table.Column>BasketBall</Table.Column>
            <Table.Column>$49.99</Table.Column>
          </Table.Row>
          <Table.Row>
            <Table.ColumnHeader colspan="2">Electronics</Table.ColumnHeader>
          </Table.Row>
          <Table.Row>
            <Table.Column>Ipad Touch</Table.Column>
            <Table.Column>$49.99</Table.Column>
          </Table.Row>
          <Table.Row>
            <Table.Column>Iphone 5</Table.Column>
            <Table.Column>$49.99</Table.Column>
          </Table.Row>
          <Table.Row>
            <Table.Column>Nexus 7</Table.Column>
            <Table.Column>$49.99</Table.Column>
          </Table.Row>
        </Table.TBody>
      </Table.TableContainer>
    </div>
  );
};

export default ProductTable;
