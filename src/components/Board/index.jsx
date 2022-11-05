import React, { useCallback } from 'react';
import EmptyTasks from '../EmptyTasks';
import Task from '../Task';
import { Container, ContainerTextNumber, Content, HeaderBoard, TextColor, TextContainer, TextNumber } from './styles';


const Board = ({
    tasks,
    setTasks
}) => {
    // const createdTasks = complete aqui
    // const completedTasks = complete aqui

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
        console.log(tasks, 'tasks')
      },
      [tasks],
    )

    const deselectTask = useCallback((id) => {
        // complete aqui
    }, [tasks])
    
  
  return <Container>
        <HeaderBoard>
            <TextContainer>
                <TextColor>Tarefas Criadas</TextColor>
                <ContainerTextNumber>
                    <TextNumber>{0}</TextNumber>
                </ContainerTextNumber>
            </TextContainer>
            <TextContainer>
                <TextColor>Concluídas</TextColor>
                <ContainerTextNumber>
                    <TextNumber>{0} de {0}</TextNumber>
                </ContainerTextNumber>
            </TextContainer>
        </HeaderBoard>
        <Content>
            {
                tasks && tasks.length ? tasks.map((task) => (
                    <Task 
                    task={task}
                    key={task.id}
                    updateTask={updateTask}
                    onDelete={deselectTask}
                    />
                ))
                  :
                   <EmptyTasks />
            }
        </Content>
  </Container>;
}

export default Board;