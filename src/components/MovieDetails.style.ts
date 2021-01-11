import styled from 'styled-components';

export const Layout = styled.div`
    background-color: #232323;
    opacity: 0.5;
    top: 25px;
    height: 550px;

    input {
        float: right;
        margin-top: 10px;
        margin-right: 25px;
        color: #F65261;
        border-style: none;
    }

    img {
        float: left;
        margin-top: 50px;
        margin-left: 50px;
    }

    > div {
        display: inline-block;
        margin-left: 50px;
        margin-top: 50px;
    }

    > div > span:nth-of-type(1) {
        border-radius: 50%;
        color: green;
        border-color: #555555;
        border-style: solid;
        padding: 3px;
        margin-left: 10px;
    }

    > div > h1 {
        display: inline;
    }

    > div > h3 {
        display: inline;
    }

    > div > p {
        word-wrap: break-word;
        width: 500px;
    }

    .color-red {
        color: #F65261;
    }
`;