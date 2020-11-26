import styled from 'styled-components';

export const Layout = styled.main`
    background-color: #232323;
    margin-top: 120px;
    margin-right: 20%;
    margin-bottom: 120px;
    margin-left: 20%;
    height: 1000px;
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

    h4 {
        color: #F65261;
        margin-left: 75px;
    }

    .input {
        margin-left: 75px;
        color: #FFFFFF;
        height: 40px;
        border-radius: 4px;
        background-color: #434343;
        border-style: none;
        width: calc(100% - 150px);
        padding-left: 15px;
    }

    .select {
        margin-left: 75px;
        color: #FFFFFF;
        height: 40px;
        border-radius: 4px;
        background-color: #434343;
        border-style: none;
        width: calc(100% - 135px);
        padding-left: 15px;
    }

    .actions-container {
        float: right;
        margin-right: 75px;
        margin-top: 100px;
    }

    .btn-action {
        display: inline-block;
        border-style: solid;
        border-radius: 4px;
        border-color: #F65261;
        color: #F65261;
        width: 160px;
        height: 50px;
        font-size: large;
    }

    .btn-reset {
        background-color: #232323;
        margin-right: 5px;
    }

    .btn-submit {
        background-color: #F65261;
        color: #FFFFFF;
    }
`;