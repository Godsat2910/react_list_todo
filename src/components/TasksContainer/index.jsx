import React  from 'react';
import Board from '../Board';
import Button from '../Button';
import Input from '../Input';

import { ButtonStyle, Container, InputContainer, InputStyle } from './styles';


const TasksContainer = () => {


  return <Container>
      <InputContainer>
        <Input style={InputStyle} placeholder='Adicione uma nova tarefa' onChange={(e) => setCurrentTask(e.target.value)}/>
        <Button style={ButtonStyle} onClick={() => console.log('complete aqui')}>Criar</Button>
      </InputContainer>
      
  </Container>
}

export default TasksContainer;