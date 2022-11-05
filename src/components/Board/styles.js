import styled from 'styled-components';
import colors from '../../config/colors';

export const Container = styled.div`
  width: 100%;
  flex: 1;
  margin-top: 4em;
`;

export const HeaderBoard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 0 1em 0;
`
export const TextContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
`

export const ContainerTextNumber = styled.div`
    border-radius: 16px;
    padding: 3px 5px 3px 5px;
    background-color: ${colors.gray400};
`

export const TextNumber = styled.span`
    font-size: 16px;
    color: ${colors.gray200};
    font-weight: bold;
`

export const TextColor = styled.p`
    font-size: 16px;
    font-weight: bold;
    color: ${({color}) => color || colors.blue};
`

export const Content = styled.div`

`

