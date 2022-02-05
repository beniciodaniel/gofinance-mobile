import React, { useState } from 'react';
import { Button } from '../../components/Forms/Button';
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton';
import { CategorySelect } from '../CategorySelect';
import { Modal } from 'react-native';
import { InputForm } from '../../components/Forms/InputForm';
import { useForm } from 'react-hook-form';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';
import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsTypes
} from './styles';

export type FormData = {
  [name: string]: any;
};

export function Register() {
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria'
  });
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const { control, handleSubmit } = useForm();

  function handleRegister(form: FormData) {
    if (!transactionType) {
      // alertar
    }

    if (category.key === 'category') {
      // alertar
    }

    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key
    };

    console.log(data);
  }

  function handleTransactionsTypeSelect(type: 'income' | 'outcome') {
    setTransactionType(type);
  }

  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true);
  }

  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <InputForm control={control} placeholder="Nome" name="name" />
          <InputForm control={control} placeholder="Preço" name="amount" />

          <TransactionsTypes>
            <TransactionTypeButton
              onPress={() => handleTransactionsTypeSelect('income')}
              title="Entrada"
              type="income"
              isActive={transactionType === 'income'}
            />
            <TransactionTypeButton
              onPress={() => handleTransactionsTypeSelect('outcome')}
              title="Saída"
              type="outcome"
              isActive={transactionType === 'outcome'}
            />
          </TransactionsTypes>

          <CategorySelectButton
            title={category.name}
            onPress={handleOpenSelectCategoryModal}
          />
        </Fields>
        <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
      </Form>

      <Modal visible={categoryModalOpen}>
        <CategorySelect
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectCategoryModal}
        />
      </Modal>
    </Container>
  );
}
