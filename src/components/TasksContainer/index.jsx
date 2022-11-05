
import { nanoid } from 'nanoid';
import { useState } from 'react';
import Board from '../Board';
import Button from '../Button';
import Input from '../Input';

import { ButtonStyle, Container, InputContainer, InputStyle } from './styles';


const TasksContainer = () => {
const [taskDescrition, setTaskDescrition] = useState('')
const [tasks, setTasks] = useState([])

function addTask(id){
  const currentTask = {
    content: taskDescrition, 
    id: nanoid(),
    completed: false,
  } 

  setTasks([...tasks, currentTask]) 

}
 
console.log(tasks)
  return <Container>
      <InputContainer>
        <Input style={InputStyle} placeholder='Adicione uma nova tarefa' onChange={(e) => setTaskDescrition(e.target.value)}/>
        <Button style={ButtonStyle} onClick={addTask}>Criar</Button>
      </InputContainer>
      <Board tasks={tasks} setTasks={setTasks}/>
  </Container>
}

export default TasksContainer;