import styled from 'styled-components';
import colors from '../../config/colors';

export const Container = styled.input`
    background: ${colors.gray400};
    padding: 10px 15px 10px;
    border-radius: 7px;
    outline: none;
    height: 40px;
    border: 1px solid ${colors.gray700};
    color: ${colors.gray300};
    font-size: 18px;
    font-weight: 500;
    box-shadow: 0 3px 5px rgb(0 0 0 / 0.2);
    
    ::placeholder {
        color: ${colors.gray300};
        font-size: 18px;
     }
`;  
