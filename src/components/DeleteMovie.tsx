import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.main`
    background-color: #232323;
    margin-top: 120px;
    margin-right: 20%;
    margin-bottom: 120px;
    margin-left: 20%;
    height: 400px;
    color: #FFFFFF;
`;

const CloseButton = styled.input.attrs(props => ({
    type: "button",
    value: "x"
}))`
    background-color: #232323;
    color: #FFFFFF;
    font-size: 2em;
    float: right;
    outline: none;
    border-style: none;
    margin-right: 30px;
    margin-top: 30px;
`;

const DeleteMovieLabel = styled.h1`
    margin-left: 75px;
    padding-top: 100px;
`;

const Question = styled.h3`
    margin-left: 75px;
`;

const ConfirmButton = styled.input.attrs(props => ({
    type: "button",
    value: "CONFIRM"
}))`
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
`;

type DeleteMovieProps = {
    onConfirm: () => void,
    onClose: () => void,
}

class DeleteMovie extends Component<DeleteMovieProps> {
    render() {
        return (
            <Container>
                <CloseButton onClick={this.props.onClose} />
                <DeleteMovieLabel>DELETE MOVIE</DeleteMovieLabel>
                <Question>Are you sure you want to delete this movie?</Question>
                <ConfirmButton onClick={this.props.onConfirm} />
            </Container>
        );
    }
}

export default DeleteMovie;