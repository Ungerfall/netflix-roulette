import styled from 'styled-components';

export const Layout = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 10px;

    .radio > label {
        display: inline-block;
        margin-left: 5px;
    }

    .radio > label:hover {
        cursor: pointer;
    }

    .sortby > span {
        color: #555555;
    }

    .sortby > select {
        margin-left: 20px;
        background-color: #232323;
        border-style: none;
        color: #FFFFFF;
    }

    .checked {
        height: 5px;
        background-color: #F65261;
    }
`;

export const BottomLine = styled.div`
    height: 5px;
    background-color: #424242;
`;