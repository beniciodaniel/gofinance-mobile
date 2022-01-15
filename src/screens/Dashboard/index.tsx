import React from 'react';

import { HighlightCard } from '../../components/HighlightCard';
import {
  TransactionCard,
  TransactionCardProps
} from '../../components/TransactionCard';

import {
  Container,
  Header,
  HighlightCards,
  Icon,
  Photo,
  Title,
  Transactions,
  TransactionsList,
  User,
  UserGreetings,
  UserInfo,
  UserName,
  UserWrapper
} from './styles';

export interface TransactionsListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data: TransactionsListProps[] = [
    {
      id: '1',
      type: 'income',
      title: 'Desenvolvimento de Site',
      date: '14/01/22',
      amount: 'R$ 13.400,25',
      category: { name: 'Vendas', icon: 'dollar-sign' }
    },
    {
      id: '2',
      type: 'outcome',
      title: 'Compra carregador',
      date: '14/01/22',
      amount: 'R$ 400,25',
      category: { name: 'Compra', icon: 'shopping-bag' }
    },
    {
      id: '3',
      type: 'outcome',
      title: 'Aluguel do apartamento',
      date: '14/01/22',
      amount: 'R$ 1.400,25',
      category: { name: 'Casa', icon: 'coffee' }
    }
  ];

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

        <TransactionsList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}
