import styled from 'styled-components';

export const Layout = styled.div`
    width: auto;
    margin: 0;
    position: relative;

    img {
        border: 1px;
        border-style: solid;
        border-color: #FFFFFF;
        margin-bottom: 15px;
    }

    span:first-of-type {
        font-size: larger;
    }

    span:nth-of-type(2) {
        float: right;
        padding-left: 10px;
        padding-right: 10px;
        border: 1px solid #757575;
        border-radius: 3px;
    }

    div {
        color: #757575;
    }

    :hover .movie-card-menu {
        display: block;
    }

    .movie-card-menu {
        width: 32px;
        height: 32px;
        background: black;
        margin: 20px auto;
        border-radius: 50%;
        position: absolute;
        top: 0px;
        right: 15px;
        display: none;
    }

    .movie-card-menu::before {
        content: "";
        position: absolute;
        left: 50%;
        top: 6px;
        margin-left: -2px;
        background: hsl(0, 0%, 100%);
        border-radius: 50%;
        width: 4px;
        height: 4px;
        box-shadow: 0px 8px white, 0px 16px white;
    }

    .dropdown-content {
        display: none;
        position: relative;
        margin-top: 0px;
        left: -125px;
        background-color: #232323;
        min-width: 160px;
        overflow: auto;
        z-index: 1;
        padding-left: 0;
        border-radius: 5%;
    }

    .dropdown-content-show {
        display: block;
    }

    .dropdown-content input {
        position: absolute;
        top: 0px;
        right: 0px;
        border-style: none;
        background-color: #232323;
        color: #FFFFFF;
        outline: none;
    }

    .dropdown-content li {
        text-align: left;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        color: #FFFFFF
    }

    .dropdown-content li:hover {
        background-color: #F65261;
    }
`;
