import React, { useState } from 'react';
import { Button } from '../../components/Forms/Button';
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton';
import { CategorySelect } from '../CategorySelect';
import { Modal, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { InputForm } from '../../components/Forms/InputForm';
import { useForm } from 'react-hook-form';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

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

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  amount: Yup.number()
    .typeError('Informe um valor numérico')
    .positive('O valor deve ser positivo')
});

export function Register() {
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria'
  });
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  function handleRegister(form: FormData) {
    if (!transactionType) {
      Alert.alert('Selecione o tipo da transação');
      return;
    }

    if (category.key === 'category') {
      Alert.alert('Selecione a categoria');
      return;
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>

        <Form>
          <Fields>
            <InputForm
              autoCapitalize="sentences"
              autoCorrect={false}
              control={control}
              placeholder="Nome"
              name="name"
              error={errors.name && errors.name.message}
            />
            <InputForm
              keyboardType="numeric"
              control={control}
              placeholder="Preço"
              name="amount"
              error={errors.amount && errors.amount.message}
            />

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
    </TouchableWithoutFeedback>
  );
}
