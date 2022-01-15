import React from 'react';
import {
  Amount,
  Category,
  CategoryName,
  Container,
  Date,
  Footer,
  Icon,
  Title
} from './styles';

export function TransactionCard() {
  return (
    <Container>
      <Title>Desenvolvimento de Site</Title>
      <Amount>R$ 12.000</Amount>

      <Footer>
        <Category>
          <Icon name="dollar-sign" />
          <CategoryName>Vendas</CategoryName>
        </Category>
        <Date>14/01/22</Date>
      </Footer>
    </Container>
  );
}
