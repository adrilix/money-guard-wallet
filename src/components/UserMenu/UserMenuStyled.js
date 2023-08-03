import styled from "styled-components"

export const UserMenuStyled = styled.div`
    display: flex;
    min-height: 35px;
    justify-content: space-between;
    align-items: center;
`


export const ButtonLogOutStyled = styled.button`
    font-size: 12px;
    font-weight: bold;
    border: none;
    outline: none;
    border-radius: 6px;
    padding: 4px;
    text-transform: uppercase;
    background: #deb887;
    color: black;

  &:hover {
    background: rgb(255 107 96);
    color: black;
    cursor: pointer;
}
`

export const AccountNameStyled = styled.p`
padding-right: 10px;
`