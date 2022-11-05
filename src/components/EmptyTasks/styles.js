import styled from 'styled-components';
import colors from '../../config/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* border-top: 1px solid ${colors.gray400}; */
  padding-top: 4em;
  
  img {
      width: 70px;
      margin-bottom: 1em;
  }
`;

export const TopLineCurved = styled.div`
    display: flex;
    width: 100%;
    height: 10px;
    border-color: ${colors.gray400};
    border-style: solid;
    border-width: 2px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    border-bottom: none;
    border-left: none;
    border-right: none;
    margin-bottom: 5em;
`

export const Text = styled.p`
    font-size: 18px;
    line-height: 30px;
    color: ${colors.gray300};
`

export const BoldText = styled.p`
    font-size: 18px;
    color: ${colors.gray300};
    font-weight: bold;
`
