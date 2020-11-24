import styled from 'styled-components';

export const TextInput = styled.input.attrs(props => ({
    type: "text",
}))`
    height: 40px;
    width: calc(100% - 380px);
    border-radius: 3px;
    opacity: 0.3;
    position: absolute;
    left: 100px;
    top: 150px;
`;

export const Button = styled.input.attrs(props => ({
    type: "button",
}))`
    background-color: #F65261;
    color: #FFFFFF;
    border-style: none;
    height: 45px;
    width: 150px;
    font-size: medium;
    position: absolute;
    top: 150px;
    right: 100px;
`;
