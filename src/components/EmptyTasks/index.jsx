import React from 'react';
import Board from '../../assets/clipboard.svg';
import { BoldText, Container, Text, TopLineCurved } from './styles';

const EmptyTasks  = () => {
  return <Container>
            <TopLineCurved />
            <img src={Board} alt="board" />
            <BoldText>Você ainda não tem tarefas cadastradas</BoldText>
            <Text>Crie tarefas e organize seus itens a fazer</Text>
        </Container>;
}

export default EmptyTasks;