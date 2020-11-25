import styled from 'styled-components';

export const Layout = styled.main`
    background-color: #232323;
    margin-top: 120px;
    margin-right: 20%;
    margin-bottom: 120px;
    margin-left: 20%;
    height: 400px;
    color: #FFFFFF;

    .btn-close {
        background-color: #232323;
        color: #FFFFFF;
        font-size: 2em;
        float: right;
        outline: none;
        border-style: none;
        margin-right: 30px;
        margin-top: 30px;
    }

    h1 {
        margin-left: 75px;
        padding-top: 100px;
    }

    h3 {
        margin-left: 75px;
    }

    .btn-confirm {
        float: right;
        margin-right: 75px;
        margin-top: 100px;
        border-style: solid;
        border-radius: 4px;
        border-color: #F65261;
        background-color: #F65261;
        color: #FFFFFF;
        width: 160px;
        height: 50px;
        font-size: large;
    }
`;