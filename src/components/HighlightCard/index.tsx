import React from 'react';

import {
  Amount,
  Container,
  Footer,
  Header,
  Icon,
  LastTransaction,
  Title
} from './styles';

export function HighlightCard() {
  return (
    <Container>
      <Header>
        <Title>Entrada</Title>
        <Icon name="arrow-up-circle" />
      </Header>

      <Footer>
        <Amount>R$ 17.340,00</Amount>
        <LastTransaction>Última entrada dia 17 de janeiro</LastTransaction>
      </Footer>
    </Container>
  );
}
