import React from 'react';

import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard } from '../../components/TransactionCard';

import {
  Container,
  Header,
  HighlightCards,
  Icon,
  Photo,
  Title,
  Transactions,
  User,
  UserGreetings,
  UserInfo,
  UserName,
  UserWrapper
} from './styles';

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: 'https://avatars.githubusercontent.com/u/52285940?v=4'
              }}
            />
            <User>
              <UserGreetings>Olá,</UserGreetings>
              <UserName>Beni</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard
          title="Entradas"
          amount="R$ 17.344,91"
          lastTransaction="Última entrada no dia 19 de janeiro"
          type="up"
        />
        <HighlightCard
          title="Saídas"
          amount="R$ 4.500"
          lastTransaction="Última saída no dia 19 de janeiro"
          type="down"
        />
        <HighlightCard
          title="Total"
          type="total"
          amount="R$ 9.500"
          lastTransaction="1 à 18 de janeiro"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionCard />
      </Transactions>
    </Container>
  );
}
