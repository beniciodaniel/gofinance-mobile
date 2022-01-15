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

interface Category {
  name: string;
  icon: string;
}

export interface TransactionCardProps {
  type: 'income' | 'outcome';
  title: string;
  amount: string;
  category: Category;
  date: string;
}
interface Props {
  data: TransactionCardProps;
}

export function TransactionCard({
  data: { amount, category, date, title, type }
}: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <Amount type={type}>
        {type === 'outcome' && '- '}
        {amount}
      </Amount>

      <Footer>
        <Category>
          <Icon name={category.icon} />
          <CategoryName>{category.name}</CategoryName>
        </Category>
        <Date>{date}</Date>
      </Footer>
    </Container>
  );
}
