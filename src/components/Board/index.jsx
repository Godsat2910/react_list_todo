import React, { Fragment, useCallback } from 'react';
import EmptyTasks from '../EmptyTasks';
import Task from '../Task';
import { Container, ContainerTextNumber, Content, HeaderBoard, TextColor, TextContainer, TextNumber } from './styles';

const Board = ({
    tasks,
    setTasks
}) => {
    const createdTasks = tasks.length
    const completedTasks = tasks.filter((task) => task.completed).length


    const updateTask = useCallback(
      (id) => {
        const currentTask = tasks.find(task => task.id === id)
        if (currentTask) {
            setTasks(
                tasks.map((item) => (
                    item.id === currentTask.id ? {...item, completed: !item.completed} : item
                ))
            )
        }
        
      },
      [tasks],
    )

    const deleteTask = useCallback((id) => {
        setTasks(
            tasks.filter((task) => task.id !== id)
        )
    }, [tasks])
    
  
  return <Container>
        <HeaderBoard>
            <TextContainer>
                <TextColor>Tarefas Criadas</TextColor>
                <ContainerTextNumber>
                    <TextNumber>{createdTasks }</TextNumber>
                </ContainerTextNumber>
            </TextContainer>
            <TextContainer>
                <TextColor>Concluídas</TextColor>
                <ContainerTextNumber>
                    <TextNumber>{completedTasks} de {createdTasks}</TextNumber>
                </ContainerTextNumber>
            </TextContainer>
        </HeaderBoard>
        <Content>
            {tasks.map((task) => (
                <Fragment  key={task.id}>
                    <Task task={task} updateTask={updateTask} onDelete={deleteTask}/>
                </Fragment>
            ))}
        </Content>
  </Container>;
}

export default Board;