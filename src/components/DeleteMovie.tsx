import React from 'react';
import { Layout } from './DeleteMovie.style';

type DeleteMovieProps = {
    onConfirm: () => void,
    onClose: () => void,
}

const DeleteMovie: React.FC<DeleteMovieProps> = ({ onConfirm, onClose }) => {
    return (
        <Layout>
            <input type="button" value="x" onClick={onClose} className="btn-close" />
            <h1>DELETE MOVIE</h1>
            <h3>Are you sure you want to delete this movie?</h3>
            <input type="button" value="CONFIRM" onClick={onConfirm} className="btn-confirm" />
        </Layout>
    );
};

export default DeleteMovie;