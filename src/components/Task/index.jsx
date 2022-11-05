import React from 'react';
import Trash from '../../assets/trash.svg';

import { Container, ContainerInput, ContainerText, ContainerTrash, Text } from './styles';
import colors from '../../config/colors';


const colorInput = {
    completed: colors.purple,
    notCompleted: colors.gray400,
}

const Task = ({
    task: {completed, content, id}, updateTask, onDelete
}) => {

  return <Container >
      <ContainerInput backgroundColor={completed ? colorInput.completed : colorInput.notCompleted}>
          <input type="checkbox" checked={completed} name="" id={id} onChange={() => updateTask(id)}   />
      </ContainerInput>
      <ContainerText>
            <Text>{content}</Text>
      </ContainerText>
      <ContainerTrash>
            <img src={Trash} alt="trash" onClick={() => onDelete(id)}/>
      </ContainerTrash>
  </Container>;
}

export default Task;