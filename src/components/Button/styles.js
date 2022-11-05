import styled from 'styled-components';
import colors from '../../config/colors';

export const Container = styled.button`
    background-color: ${colors.blueDark};
    height: 50px;
    font-weight: 500;
    outline: none;
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
    padding: 10px 20px 10px 20px;
    border-radius: 7px;
    border: 1px solid ${colors.gray700};
    box-shadow: 0 3px 5px rgb(0 0 0 / 0.2);
    cursor: pointer;

    :hover {
        box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);
     }

    img {
        width: 20px;
    }

`;

export const TextButton = styled.span`
    font-size: 18px;
    font-weight: 500;
    color: #fff;
`
