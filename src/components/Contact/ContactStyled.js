import styled from "styled-components"

export const ContactStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ContactDataStyled = styled.span`
    width: 120px;
`

export const ButtonDeleteStyled = styled.button`
    font-size: 10px;
    border: none;
    outline: none;
    border-radius: 6px;
    padding: 4px;
    text-transform: uppercase;
    background: rgb(255 107 96);
    color: #fff;

  &:hover {
    background: rgb(221 255 28);
    color: #1ab188;
    cursor: pointer;
}
`