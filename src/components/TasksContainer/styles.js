import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    margin: auto;

    @media screen and (max-width: 1600px) {
        width: 70%   
    }
    @media screen and (max-width: 1200px) {
        width: 80%   
    }
`;

export const InputContainer = styled.div`
    display: flex;
    gap: 1em;
    width: 100%;
    
`

export const ButtonStyle = {
    height: '62px',
    width: '10%',
    paddingLeft: '20px',
    paddingRight: '20px',
}

export const InputStyle = { 
    height: '40px',
    width: '90%',
}
