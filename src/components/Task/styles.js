import styled from "styled-components";
import colors from "../../config/colors";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 5% 85% 10%;
  gap: 10px;
  background-color: ${colors.gray400};
  padding: 20px;
  border-radius: 7px;
  margin-bottom: 1em;
`;

export const ContainerText = styled.div``;

export const Text = styled.p`
  font-size: 16px;
  color: ${colors.gray100};
`;

export const ContainerInput = styled.div`
  input[type="checkbox"] {
    -webkit-appearance: none;
    appearance: none;
    background-color: ${({ backgroundColor }) =>
      backgroundColor || colors.gray400};
    margin: 0;

    font: inherit;
    color: ${colors.blue};
    width: 1.3em;
    height: 1.3em;
    border: 0.15em solid ${colors.blue};
    border-radius: 50%;
    transform: translateY(-0.075em);
    cursor: pointer;
    display: grid;
    place-content: center;
  }

  input[type="checkbox"]::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    transform: scale(0);
    transform-origin: bottom left;
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em var(--form-control-color);
    background-color: CanvasText;
  }

  input[type="checkbox"]:checked::before {
    transform: scale(1);
    background-color: ${colors.gray100};
  }
`;

export const InputCheckbox = styled.input`
  display: none;
`;

export const ContainerTrash = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  img {
    width: 30px;
    transform: translateY(-15%);
    cursor: pointer;
  }
`;
