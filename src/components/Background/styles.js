import styled from 'styled-components';
import colors from '../../config/colors';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  justify-content: center;
  align-items: flex-start;
  ${() => `
    background: linear-gradient(
        to bottom,
        ${colors.gray700} 0%,
        ${colors.gray700} 30%,
        ${colors.gray600} 30%,
        ${colors.gray600} 100%
    );
  `}
`;

export const ContainerImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 200px;
    margin-bottom: 3.7em;
  }
  
`

export const Content = styled.div`
  flex: 1;
  flex-direction: column;
  margin-top: 7em;
`