import React from 'react';
import Logo from '../../assets/logo.svg';

import { Container, ContainerImage, Content } from './styles';



const Background = ({children}) => {
  return <Container>
      
      <Content>
        <ContainerImage >
          <img src={Logo} alt="" />
        </ContainerImage>
        {children}
      </Content>
  </Container>
}

export default Background;